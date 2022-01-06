import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import {App} from "./App";
import {AppStateType, store} from "./redux/redux-store";


const reRenderEntireThree = (state: AppStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

reRenderEntireThree(store.getState());
store.subscribe(() => {
    reRenderEntireThree(store.getState())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
