import React, {ChangeEvent} from "react";
import { Redirect } from "react-router-dom";

import style from "./Dialogs.module.css"
import { DialogsInitialStateType } from "../../redux/dialogs-reducer";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


//types:
export type DialogsPropsType = {
    dialogsPage: DialogsInitialStateType
    addMessage: (newMessageText: string) => void
    setNewMessageText: (newText: string) => void
    isAuth: boolean
}


//functional component:
const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const state = props.dialogsPage; // state!!!

    let dialogElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>);

    const addMessageHandler = () => {
        if (state.newMessageText) {
            props.addMessage(state.newMessageText.trim());
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.setNewMessageText(newText);
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addMessageHandler();
        }
    }


    if (!props.isAuth){ //auth Redirect!!!
        return <Redirect to={"/Login"}/>
    }

    return (
        <div className={style.dialogsPage}>

            <div className={style.dialogs}>
                {
                    dialogElements
                }
            </div>

            <div className={style.messages}>
                <div className={style.messageElements}>
                    {
                        messageElements
                    }
                </div>
                <hr/>
                <div className={style.inputAreaElements}>

                    <div>
                        <textarea
                            value={state.newMessageText}
                            maxLength={100000}
                            onChange={onChangeHandler}
                            placeholder={"Write something"}
                            onKeyPress={onKeyPressHandler}
                        />
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export {
    Dialogs
}
