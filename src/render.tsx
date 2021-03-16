import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, messageForNewPost, RootStateType} from './redux/state'
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    messageForNewPost={messageForNewPost}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();
