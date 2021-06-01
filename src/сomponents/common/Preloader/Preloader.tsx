import React from "react";

type PreloaderPropsType = {
    isFetching: boolean
}

const Preloader: React.FC<PreloaderPropsType> = (props) => { //need to fix any (preloader from profileContent)
    return (
        <>
            {props.isFetching
                ? <div> loading... </div>
                : null}
        </>
    )
}

export {
    Preloader
}
