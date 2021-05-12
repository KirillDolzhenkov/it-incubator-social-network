import React from "react";
import stylesModule from "./../Dialogs.module.css";

type MessagePropsType = {
    messageText: string
}

const Messages: React.FC<MessagePropsType> = (props) =>{
    return (
        <div className={stylesModule.message}>
            {props.messageText}
        </div>
    )
}

export {
    Messages
}