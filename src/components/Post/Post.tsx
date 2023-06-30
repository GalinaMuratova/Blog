import React from 'react';
import './Post.css'
import {Link} from "react-router-dom";

interface Props {
    time: string;
    title: string;
    id: string;
}

const Post:React.FC<Props> = ({time, title, id}) => {
    return (
        <div className="my-4 post-block d-flex flex-column card">
          <p className='card-header post-time'>{time}</p>
          <h4 className='py-4 ps-5 ms-3'>{title}</h4>
          <Link to={'posts/' + id } className='mx-auto btn btn-light mb-3'>Read more {'>>'}</Link>
        </div>
    );
};

export default Post;