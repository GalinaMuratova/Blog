import React from 'react';
import Post from "../../components/Post/Post";
import {ITextMutation} from "../../types";

interface Props {
    posts: ITextMutation[];
}

const Home:React.FC<Props> = ({posts}) => {
    return (
        <div>
            <h2 className="text-center my-3">Home page</h2>
            {posts.map((el) => (
                    <Post time={el.data} title={el.title}/>
                ))}
        </div>
    );
};

export default Home;