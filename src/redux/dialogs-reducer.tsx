import {ActionType, DialogsPageType, MessageType} from "./store";

const SEND_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "CHANGE-MESSAGE-TEXT"

export const addMessageAC = (newMessageText: string) => {
    return {type: SEND_MESSAGE, newMessageText} as const
}
export const changeMessageAC = (newDialogText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newDialogText} as const
}

const initialState = {
    dialog: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
    ],
    message: [
        {id: 1, message: "hello"},
        {id: 2, message: "How are you?"},
    ],
    newMessageText: ''
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType) => {
    if (action.type === SEND_MESSAGE) {
        const newMessage: MessageType = {
            id: 3,
            message: action.newMessageText
        };
        state.message.push(newMessage)
        state.newMessageText = ""
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageText = action.newDialogText
    }
    return state;
}
export {
    dialogsReducer
}
