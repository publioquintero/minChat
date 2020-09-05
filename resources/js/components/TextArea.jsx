import React from "react";
import { sentMessage } from "./redux/actions/mainActions";
import { useDispatch } from "react-redux";
import sent from '../components/assets/images/unnamed.png'

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
                className="w-11/12 m-auto flex"
                autoComplete="off"
            >
                <input
                    name="message"
                    id="message"
                    className="text-base border  mb-1 appearance-none block w-10/12 m-auto bg-gray-200 text-gray-700 border border-gray-500  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none"
                    onChange={handleChange}
                    value={data.message}
                />
                <div className="w-2/12">
                    <button className="bg-transparent  py-2 px-4  rounded">
                        <img src={sent} className="w-100" alt=""/>
                    </button>
                </div>
                
            </form>
        </div>
    );
};

export default TextArea;
