import React from "react";

import "./Preloader.css"
/*import PreloaderLogo from "preloaderLogo.png"*/

type PreloaderPropsType = {}

const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        /*<div className="Preloader">
            <header className="Preloader-header">
                <img src={PreloaderLogo} className="Preloader-logo" alt="logo"/>
                <br/>
            </header>
        </div>*/
        <h1>
            loading...
        </h1>
    )
}

export {
    Preloader
}
