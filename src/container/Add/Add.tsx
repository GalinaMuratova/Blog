import React, {useEffect, useState} from 'react';
import {IText} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import './Add.css'

interface Props {
    add: () => void;
}

const Add:React.FC<Props> = ({add}) => {
    const navigate = useNavigate();
    const [text, setText] = useState<IText>({
        title:'',
        description: '',
        data: ''
    });
    const [loading, setLoading] =useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const currentData = new Date().toLocaleDateString();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            setText((prevState) => ({
                ...prevState,
                data: `Date: ${currentData}  Time: ${hours}:${minutes}:${seconds}`
            }))
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const onSubmit = async(e:React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axiosApi.post('posts.json', text);
        } finally {
            setLoading(false);
            navigate('/')
            add();
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
            <button type="submit" className='btn btn-dark'>Add new post</button>
        </form>
    );

    if (loading) {
        form = <Spinner />;
    }

    return (
        <div>
            <h2 className="text-center py-3 mt-4">Add post</h2>
            <div className="add-block p-4 text-center">
                {form}
            </div>
        </div>
    );
};

export default Add;