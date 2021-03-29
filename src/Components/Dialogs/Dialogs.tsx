import React, {ChangeEvent} from "react";
import styleModule from "./Dialogs.module.css";
import {Messages} from "./Messages/Messages"
import {DialogItems} from "./DialogItems/DialogItems";
import {ActionType, addMessageAC, RootStateType} from "../../redux/state";

type DialogsType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.state.dialogsPage.dialog
        .map(d => <DialogItems key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.state.dialogsPage.message
        .map(m => <Messages key={m.id} messageText={m.message}/>)

    const addItem = () => {
        if(props.state.dialogsPage.newMessageText.trim()){
            props.dispatch(addMessageAC(props.state.dialogsPage.newMessageText))
        }
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-MESSAGE-TEXT", newDialogText: (e.currentTarget.value)})
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            addItem();
        }
    }

    return (
        <div className={styleModule.dialogs}>
            <div className={styleModule.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styleModule.messages}>
                {messagesElements}
                <hr/>
                <div>
                    <textarea value={props.state.dialogsPage.newMessageText}
                              onChange={onChangeHandler}
                              onKeyPress={onKeyPressHandler}
                              placeholder="Write something"
                    />
                </div>
                <div>
                    <button onClick={addItem}>Send</button>
                </div>
            </div>
        </div>
    )
}