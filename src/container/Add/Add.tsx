import React, {useEffect, useState} from 'react';
import './Add.css'
import {IText} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";

const Add = () => {
    const navigate = useNavigate();
    const [text, setText] = useState<IText>({
        title:'',
        description: '',
        data: ''
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            setText((prevState) => ({
                ...prevState,
                data: `${hours}:${minutes}:${seconds}`
            }))
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const onSubmit = async(e:React.FormEvent) => {
        e.preventDefault();
        try {
            await axiosApi.post('posts.json', text);
        } catch(error) {
            console.log(error)
        } finally {
            navigate('/')
        }
    };

    const change = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        setText((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2 className="text-center m-4">Add post</h2>
            <div className="add-block p-4 ">
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
            </div>
        </div>
    );
};

export default Add;