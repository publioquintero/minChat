import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/tailwind.css";
import "animate.css/animate.min.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import './assets/css/custom.css'

if (document.getElementById("root")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
    );
}
