import React from "react";
import { useSelector } from "react-redux";

const Chat = () => {
    const main = useSelector(state => state.mainReducers);
 
    React.useEffect(updateScroll, [main.messages]);

    function updateScroll(){
        var element = document.getElementById("chatText");
        element.scrollTop = element.scrollHeight;
    }

    return (

        <React.Fragment>
            <div
                id="chatText"
                style={{ height: "70vh"}}
                className="bg-gray-100 w-full overflow-y-scroll pb-10"
            >
                {Object.entries(main.messages).map(([key, value]) => (
                    <div
                        className={`${value.class} text-sm animate__animated animate__fadeInUp animate__fast m-2 p-2`}
                        key={key}
                    >
                        {value.message}
                        <div className="text-xs block text-right ">{value.time}</div>
                        
                    </div>
                    
                ))}
            </div>
        </React.Fragment>
    );
};


export default Chat;
