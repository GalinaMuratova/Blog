import React, {useCallback, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {IText} from "../../types";
import './PostDetails.css';
import Spinner from "../../components/Spinner/Spinner";

const PostDetails = () => {
    const [text, setText] = useState<IText>({
        title:'',
        description: '',
        data: ''
    });
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axiosApi.get<IText>(`/posts/${id}.json`);
            setText(response.data);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    let post = (
        <div className='post-details-block'>
            <p className='data'>{text.data}</p>
            <h2>{text.title}</h2>
            <p>{text.description}</p>
            <Link to='/edit' className='btn btn-dark me-4'>Edit</Link>
            <button className='btn btn-danger'>Delete</button>
        </div>
    );

    if (loading) {
       post = <div className='text-center'>
           <Spinner />
           </div>;
    }

    return (
        <div className='post-details'>
            {post}
        </div>
    );
};

export default PostDetails;