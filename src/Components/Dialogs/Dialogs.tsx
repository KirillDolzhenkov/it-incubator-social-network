import React from "react";
import styleModule from "./Dialogs.module.css";
import {Messages} from "./Messages/Messages"
import {DialogItems} from "./DialogItems/DialogItems";
import {RootStateType} from "../../redux/state";

type DialogsType = {
    state: RootStateType
    addMessage: (messageText: string) => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.state.dialogsPage.dialog.map(d => <DialogItems id={d.id} name={d.name}/>);
    let messagesElements = props.state.dialogsPage.message.map(m => <Messages messageText={m.message}/>);

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if(newMessageElement.current){
            console.log(newMessageElement.current.value)
            props.addMessage(newMessageElement.current.value)
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
                    <textarea ref={newMessageElement}  placeholder="Write something"/>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
        </div>
    )
}