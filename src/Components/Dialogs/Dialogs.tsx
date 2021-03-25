import React from "react";
import styleModule from "./Dialogs.module.css";
import {Messages} from "./Messages/Messages"
import {DialogItems} from "./DialogItems/DialogItems";
import {RootStateType} from "../../redux/state";

type DialogsType = {
    state: RootStateType
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.state.dialogsPage.dialog.map(d => <DialogItems id={d.id} name={d.name}/>);
    let messagesElements = props.state.dialogsPage.message.map(m => <Messages messageText={m.message}/>);

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        alert(newMessageElement.current?.value)
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
                    <textarea ref={newMessageElement} placeholder="Write something"/>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
        </div>
    )
}