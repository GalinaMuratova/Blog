import React from 'react';
import Post from "../../components/Post/Post";

const Home = () => {
    return (
        <div>
            <h2 className="text-center my-3">Home page</h2>
            <Post time='1:19' title='First post' />
            <Post time='2:19' title='Second post' />
            <Post time='3:19' title='Third post' />
        </div>
    );
};

export default Home;