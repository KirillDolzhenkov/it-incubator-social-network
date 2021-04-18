import React, {ChangeEvent} from "react";
import styleModule from "./Dialogs.module.css";
import {Messages} from "./Messages/Messages"
import {DialogItems} from "./DialogItems/DialogItems";

import {DialogsPageInitialStateType} from "../../redux/dialogs-reducer";

/*type DialogsPropsType = {
    updateNewMessageText: (text: string) => void
    addMessage: (text: string) => void
    message: Array<MessageType>
    newMessageText: string
    dialog: Array<DialogType>
}*/

type DialogsPropsType = {
    updateNewMessageText: (text: string) => void
    addMessage: (text: string) => void
    dialogsPage: DialogsPageInitialStateType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialog
        .map(d => <DialogItems key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.dialogsPage.message
        .map(m => <Messages key={m.id} messageText={m.message}/>)

    const addMessage = () => {
        if(props.dialogsPage.newMessageText.trim()){
            props.addMessage(props.dialogsPage.newMessageText)
        }
    }
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            addMessage();
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
                    <textarea value={props.dialogsPage.newMessageText}
                              onChange={onChangeHandler}
                              onKeyPress={onKeyPressHandler}
                              placeholder="Write something"
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export {
    Dialogs
}