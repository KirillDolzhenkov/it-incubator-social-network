import React, {ChangeEvent} from "react";
import styleModule from "./Dialogs.module.css";
import {Messages} from "./Messages/Messages"
import {DialogItems} from "./DialogItems/DialogItems";
import {DialogType, MessageType} from "../../redux/store";

type DialogsPropsType = {
    updateNewMessageText: (text: string) => void
    addMessage: (text: string) => void
    message: Array<MessageType>
    newMessageText: string
    dialog: Array<DialogType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialog
        .map(d => <DialogItems key={d.id} id={d.id} name={d.name}/>)
    let messagesElements = props.message
        .map(m => <Messages key={m.id} messageText={m.message}/>)

    const addMessage = () => {
        if(props.newMessageText.trim()){
            props.addMessage(props.newMessageText)
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
                    <textarea value={props.newMessageText}
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