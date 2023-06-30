import React, {useCallback, useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {IText} from "../../types";
import './PostDetails.css';
import Spinner from "../../components/Spinner/Spinner";

interface Props {
    clean: () => void;
}

const PostDetails:React.FC<Props> = ({clean}) => {
    const [text, setText] = useState<IText>({
        title:'',
        description: '',
        data: ''
    });
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axiosApi.get<IText>(`/posts/${id}.json`);
            setText(response.data);
        } finally {
            setLoading(false);
        }
    }, [id]);

    const deletePost = (async () => {
        setLoading(true);
        try {
            await axiosApi.delete(`/posts/${id}.json`);
        } finally {
            setLoading(false);
            navigate('/');
            clean();
        }
    });

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    let post = (
        <div className='post-details-block'>
            <p className='data'>{text.data}</p>
            <h2>{text.title}</h2>
            <p>{text.description}</p>
            <Link to={'/edit/'+ id} className='btn btn-dark me-4'>Edit</Link>
            <button onClick={deletePost} className='btn btn-danger'>Delete</button>
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