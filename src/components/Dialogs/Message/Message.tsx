import React from "react";

import dialogStyle from "../Dialogs.module.css";
import messageStyle from "./Message.module.css";
import defaultAvatar from "../../../assets/images/defaultSmallUserPhoto.png"

//types:
type MessagePropsType = {
    id: number
    message: string
}

//function component:
const Message: React.FC<MessagePropsType> = (props) => {
    return (

    <div className={dialogStyle.text}>
        <div className={messageStyle.message}>
            <img className={messageStyle.img} alt="userPhoto" src={defaultAvatar}/>
            <div className={messageStyle.content}>
                <div className={messageStyle.name}>userName</div>
                <div className={messageStyle.text}>{props.message}</div>
                <div className={messageStyle.time}>time</div>
            </div>
        </div>
    </div>
    )
}

export {
    Message
}