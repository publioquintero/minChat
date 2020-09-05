import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Chat = () => {
    const main = useSelector(state => state.mainReducers);
    const dispatch = useDispatch();

    React.useEffect(updateScroll,[]);

    React.useEffect( () => {
        if(main.sent) {
            updateScroll()
            dispatch({ type: 'SEND_DONE'})
        }
    }, [main.sent]);

    function updateScroll(){
        var element = document.getElementById("chatText");
        element.scrollTop = element.scrollHeight;
    }

    return (

        <React.Fragment>
            <div
                id="chatText"
                style={{ height: "70vh"}}
                className="bg-gray-100 w-full overflow-y-scroll pb-20"
            >
                {Object.entries(main.messages).map(([key, value]) => (
                    <div
                        className={`${value.class} rounded text-sm animate__animated animate__fadeInUp animate__fast m-2 p-2`}
                        key={key}
                    >
                        {value.message}
                        <div className="text-xs block">{value.time}</div>
                        
                    </div>
                    
                ))}
            </div>
        </React.Fragment>
    );
};


export default Chat;
