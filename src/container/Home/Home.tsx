import React from 'react';
import Post from "../../components/Post/Post";
import {ITextMutation} from "../../types";
import './Home.css';

interface Props {
    posts: ITextMutation[];
}

const Home:React.FC<Props> = ({posts}) => {
    const reversedPosts = [...posts].reverse();
    return (
        <div className='home-block'>
            <h2 className="text-center py-3 mt-4">Home page</h2>
            {reversedPosts.map((el) => (
                    <Post time={el.data} title={el.title} id={el.id}/>
                ))}
        </div>
    );
};

export default Home;