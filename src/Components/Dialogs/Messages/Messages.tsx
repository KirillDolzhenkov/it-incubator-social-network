import React from "react";
import styleModule from "./../Dialogs.module.css";

type MessagePropsType = {
    messageText: string
}

export const Messages: React.FC<MessagePropsType> = (props) =>{
    return (
        <div className={styleModule.message}>
            {props.messageText}
        </div>
    )
}