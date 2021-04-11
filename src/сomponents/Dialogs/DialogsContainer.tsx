import React from "react";

import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";
import {addMessageAC, changeMessageAC} from "../../redux/dialogs-reducer";

type DialogsContainerPropsType = {
    /*store: StoreType*/
}

const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage;

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
                            message={state.message}
                            newMessageText={state.newMessageText}
                            dialog={state.dialog}
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