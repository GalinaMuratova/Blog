import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./container/Home/Home";
import Add from "./container/Add/Add";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";
import './App.css';

const App:React.FC = () => {
  return (
   <>
       <header><NavBar /></header>
       <Routes>
           <Route path='/' element={(
               <Home />
           )}/>
           <Route path='/new-post' element={(
               <Add />
           )} />
           <Route path='/about' element={(
               <About />
           )} />
           <Route path='/contacts' element={(
               <Contacts />
           )} />
       </Routes>
       <footer></footer>
   </>
  );
}

export default App;
