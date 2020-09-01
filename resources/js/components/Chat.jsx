import React from 'react';
import { useSelector } from 'react-redux'

const Chat = () => {
    const main = useSelector( state => state.mainReducers)
    return (
        <div className="chat">
            {Object.entries(main.messages).map( ([key, value]) => 
                <div className="animate__animated animate__fadeInUp animate__faster text-blue-600 bg-blue-200 m-2 p-2 text-4xl" key={key}>{value.message}</div>
            )}
        </div>
    )
}

export default Chat;