import React from "react";
import TextArea from "./TextArea";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { getMessages } from "./redux/actions/mainActions";

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getMessages())
        const callMessages = setInterval(() => dispatch(getMessages()), 1000)
          return () => {
            clearInterval(callMessages)
          }
    });

    return (
        <div className="animate__animated animate__fadeIn animate__faster">
            <Chat />
            <TextArea />
        </div>
    );
};

export default App;
