import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
    const main = useSelector(state => state.mainReducers);
    const messagesEndRef = React.useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    React.useEffect(scrollToBottom, [main.messages]);

    return (

        <React.Fragment>
            <div
                id="chatText"
                style={{ height: "70vh"}}
                className="bg-gray-100 w-full overflow-y-scroll pb-3"
            >
                {Object.entries(main.messages).map(([key, value]) => (
                    <div
                        className="text-sm animate__animated animate__fadeInUp animate__faster text-blue-600 bg-blue-200 m-2 p-2"
                        key={key}
                    >
                        {value.message}
                        <div className="text-xs block text-right text-blue-300">{value.time}</div>
                        
                    </div>
                    
                ))}
                <div ref={messagesEndRef}></div>
            </div>
        </React.Fragment>
    );
};


export default Chat;
