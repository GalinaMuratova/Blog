import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./container/Home/Home";
import Add from "./container/Add/Add";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";
import './App.css';
import {IApiText, ITextMutation} from "./types";
import axiosApi from "./axiosApi";
import PostDetails from "./container/PostDetails/PostDetails";
import Edit from "./container/Edit/Edit";

const App:React.FC = () => {
    const [posts, setPosts] = useState<ITextMutation[]>([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await axiosApi.get<IApiText>('posts.json');
            const post = Object.keys(response.data).map((key) => {
                const newPost = response.data[key];
                newPost.id = key;

                return newPost;
            })
            setPosts(post);
        } catch (e) {
            console.log(e)
        }
    }, []);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    return (
   <>
       <header><NavBar /></header>
       <Routes>
           <Route path='/' element={(
               <Home posts={posts}/>
           )}/>
           <Route path='/new-post' element={(
               <Add add={fetchData}/>
           )} />
           <Route path='/about' element={(
               <About />
           )} />
           <Route path='/contacts' element={(
               <Contacts />
           )} />
           <Route path='/posts/:id' element={(
               <PostDetails clean={fetchData}/>
           )} />
           <Route path='/edit/:id' element={(
               <Edit />
           )} />
       </Routes>
       <footer></footer>
   </>
  );
}

export default App;
