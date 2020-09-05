import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
    const main = useSelector(state => state.mainReducers);
    // const messagesEndRef = React.useRef(null);

    // const scrollToBottom = () => {
    //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    // };

    // React.useEffect(scrollToBottom, [main.messages]);

    return (

        <React.Fragment>
            <div
                id="chatText"
                className="bg-gray-100 w-full h-screen overflow-y-scroll pb-24"
            >
                {Object.entries(main.messages).map(([key, value]) => (
                    <div
                        className="text-xs animate__animated animate__fadeInUp animate__faster text-blue-600 bg-blue-200 m-2 p-2"
                        key={key}
                    >
                        {value.message}
                        <div className="text-base block text-right text-blue-300">{value.created_at}</div>
                    </div>
                ))}
                {/* <div ref={messagesEndRef} /> */}
            </div>
        </React.Fragment>
    );
};


export default Chat;
