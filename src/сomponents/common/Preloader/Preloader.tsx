import React from "react";

type PreloaderPropsType = {
    isFetching: boolean
}

const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <>
            {props.isFetching ? <div> loading... </div> : null}
        </>
    )
}

export {
    Preloader
}
