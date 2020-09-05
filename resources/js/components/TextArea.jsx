import React from "react";
import { sentMessage } from './redux/actions/mainActions'
import { useDispatch } from 'react-redux'

const TextArea = () => {
    const [data, setData] = React.useState({
        message: ""
    });
    const dispatch = useDispatch();

    const handleChange = event => {
        setData({
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = event => {
        event.preventDefault();
        console.log(data);
        dispatch(sentMessage(data));
        setData({
            message: ""
        })
    };
    return (
        <div className="w-8/12 m-auto mb-2 absolute bottom-0">
            <form action="" onSubmit={handleSubmit} className="w-full">
                <textarea
                    name="message"
                    id="message"
                    rows="2"
                    className="text-xs  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none"
                    onChange={handleChange}
                    value={data.message}
                ></textarea>
                <button className="text-base  w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default TextArea;
