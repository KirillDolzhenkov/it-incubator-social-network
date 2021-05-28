import React from "react";

type PreloaderPropsType = {
    isFetching: boolean
}

const Preloader: React.FC<PreloaderPropsType> = (props) => {
    return (
        <div>
            {props.isFetching ? <div>hello</div> : null}
        </div>
    )
}

export {
    Preloader
}
