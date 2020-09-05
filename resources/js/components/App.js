import React from "react";
import TextArea from "./TextArea";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { getMessages } from "./redux/actions/mainActions";
import Logo from './Logo'

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
        <div style={ { height: "90vh" } } className="animate__animated animate__fadeIn animate__faster absolute bottom-0 w-screen overflow-visible">
            <Logo />
            <Chat />
            <TextArea /> 
        </div>
    );
};

export default App;
