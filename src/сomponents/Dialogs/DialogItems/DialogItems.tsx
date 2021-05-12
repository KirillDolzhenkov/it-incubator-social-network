import React from "react";
import stylesModule from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemsType = {
    id: number
    name: string
}

const DialogItems: React.FC<DialogItemsType> = (props) => {
    return (
        <div className={stylesModule.dialog}>
            <NavLink to = {'/dialogs/' + props.id} >{props.name}</NavLink>
        </div>
    )
}

export {
    DialogItems
}