import React from 'react';
import './Post.css'

interface Props {
    time: string;
    title: string;
}

const Post:React.FC<Props> = ({time, title}) => {
    return (
        <div className="my-4 post-block d-flex flex-column card">
          <p className='card-header post-time'>{time}</p>
          <h4 className='card-body'>{title}</h4>
          <button className='mx-auto btn btn-light mb-3'>Read more</button>
        </div>
    );
};

export default Post;