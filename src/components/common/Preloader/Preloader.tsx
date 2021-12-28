import React from "react";

import {ReactComponent as ReactLogo} from "./three-dots.svg";

//types:
type PreloaderPropsType = {}

//functional component:
const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <div>
            {/*<h1>loading...</h1>*/}
            <ReactLogo fill="#2b3f4f" stroke="current"/>
        </div>
    )
}

export {
    Preloader
}
