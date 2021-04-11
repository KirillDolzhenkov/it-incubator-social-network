import React from "react";
import {addMessageAC, changeMessageAC, StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

type DialogsContainerPropsType = {
    /*store: StoreType*/
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();

                const addMessage = (text: string) => {
                   store.dispatch(addMessageAC(text))
                }
                const onMessageChange = (text: string) => {
                    store.dispatch(changeMessageAC(text))
                }
                return (
                    <div>
                        <Dialogs
                            updateNewMessageText={onMessageChange}
                            addMessage={addMessage}
                            message={state.dialogsPage.message}
                            newMessageText={state.dialogsPage.newMessageText}
                            dialog={state.dialogsPage.dialog}
                        />
                    </div>
                )
            }}
        </StoreContext.Consumer>

    )
}

export {
    DialogsContainer
}