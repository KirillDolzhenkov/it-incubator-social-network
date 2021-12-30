import React from "react";
import {NavLink} from "react-router-dom";

import styles from "../Dialogs.module.css";

//types:
type DialogPropsType = {
    id: number
    name: string
}

//functional component:
const DialogItem: React.FC<DialogPropsType> = (props) => {

    return (
        <div className={styles.dialog + '' + styles.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export {
    DialogItem
}