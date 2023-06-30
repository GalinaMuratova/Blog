import React, {useCallback, useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {IText} from "../../types";
import {useNavigate, useParams} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import './Edit.css';

interface Props {
    edit: () => void;
}

const Edit:React.FC<Props> = ({edit}) => {
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState<IText>({
        title:'',
        description: '',
        data: ''
    });
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

    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    const onSubmit = async(e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axiosApi.put(`posts/${id}.json`, text);
        } finally {
            setLoading(false);
            navigate('/')
            edit();
        }
    };

    const change = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setText((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    let form = (
        <div className='edit-block p-4 text-center'>
            <form onSubmit={onSubmit} className="d-flex flex-column">
            <label htmlFor="title" className="label-title">Title</label>
            <input
                type="text"
                className="mb-4 form-control"
                name="title"
                id="title"
                value={text.title}
                onChange={change}
            />
            <label htmlFor="description" className="label-description">Description</label>
            <textarea
                className="mb-4 textarea-description form-control"
                id="description"
                value={text.description}
                name="description"
                onChange={change}>
            </textarea>
            <button type="submit" className='btn btn-dark'>Edit</button>
        </form>
        </div>
    );

    if (loading) {
        form = <Spinner />
    }

    return (
        <div>
            <h2 className='text-center edit-title'>Edit post</h2>
            {form}
        </div>
    );
};

export default Edit;