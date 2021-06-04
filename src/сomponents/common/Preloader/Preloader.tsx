import React from "react";
import "./Preloader.css"
import PreloaderLogo from "./preloaderLogo.png"

type PreloaderPropsType = {
}

const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <div className="Preloader">
            <header className="App-header">
                <img src={PreloaderLogo} className="App-logo" alt="logo"/>
                loading...
                <br/>
            </header>
        </div>
    )
}

export
{
    Preloader
}
