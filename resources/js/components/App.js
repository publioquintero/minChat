import React from "react";
import TextArea from "./TextArea";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { getMessages } from "./redux/actions/mainActions";

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        // dispatch(getMessages())
        const callMessages = setInterval(() => dispatch(getMessages()), 5000)
          return () => {
            clearInterval(callMessages)
          }
    });

    return (
        <div className="animate__animated animate__fadeIn animate__faster">
            <TextArea />
            <Chat />
        </div>
    );
};

export default App;
