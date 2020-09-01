import React from 'react';
import { useSelector } from 'react-redux'

const Chat = () => {
    const main = useSelector( state => state.mainReducers)
    return (
        <div className="bg-gray-100 w-8/12 m-auto h-64 overflow-y-scroll">
            {Object.entries(main.messages).map( ([key, value]) => 
                <div className="text-xs animate__animated animate__fadeInUp animate__faster text-blue-600 bg-blue-200 m-2 p-2" key={key}>{value.message}</div>
            )}
        </div>
    )
}

export default Chat;