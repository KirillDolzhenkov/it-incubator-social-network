import React from "react";
import "./Preloader.css"
import PreloaderLogo from "./preloaderLogo.png"

type PreloaderPropsType = {
    isFetching: boolean
}

const Preloader: React.FC<PreloaderPropsType> = (props) => { //need to fix any (preloader from profileContent)
    return (
        <>
            {props.isFetching
                ? <div className="Preloader">
                    <header className="App-header">
                        <img src={PreloaderLogo} className="App-logo" alt="logo"/>
                        loading...
                        <br/>
                    </header>
                </div>
                : null}
        </>
    )
}

export
{
    Preloader
}
