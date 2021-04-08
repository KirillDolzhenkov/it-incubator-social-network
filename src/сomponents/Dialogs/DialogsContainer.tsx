import React from "react";
import {addMessageAC, changeMessageAC,  StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    let state = props.store.getState();

    const addMessage = (text: string) => {
        props.store.dispatch(addMessageAC(text))
    }
    const onMessageChange = (text: string) => {
        props.store.dispatch(changeMessageAC(text))
    }

    return (
       <Dialogs
           updateNewMessageText={onMessageChange}
           addMessage={addMessage}
           message={state.dialogsPage.message}
           newMessageText={state.dialogsPage.newMessageText}
           dialog={state.dialogsPage.dialog}
       />
    )
}

export {
    DialogsContainer
}