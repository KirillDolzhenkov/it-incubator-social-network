import React from "react";
import styleModule from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemsType = {
    id: number
    name: string
}

export const DialogItems: React.FC<DialogItemsType> = (props) => {
    return (
        <div className={styleModule.dialog}>
            <NavLink to = {'/dialogs/' + props.id} >{props.name}</NavLink>
        </div>
    )
}