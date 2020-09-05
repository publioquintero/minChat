import React from "react";
import { sentMessage } from "./redux/actions/mainActions";
import { useDispatch } from "react-redux";

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
        });
    };
    return (
        <div className="w-full absolute bottom-0">
            <form
                action=""
                onSubmit={handleSubmit}
                className="w-full"
                autoComplete="off"
            >
                <input
                    name="message"
                    id="message"
                    className="text-xs border border-gray-900 mb-1 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none"
                    onChange={handleChange}
                    value={data.message}
                />
                <div className="w-100 flex justify-end">
                    <button className="text-base  w-4/12 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TextArea;
