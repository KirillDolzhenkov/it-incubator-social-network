import {ActionType} from "./store";

export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}

export type DialogsPageInitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}


const SEND_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "CHANGE-MESSAGE-TEXT"

export const addMessageAC = (newMessageText: string) => {
    return {type: SEND_MESSAGE, newMessageText} as const
}
export const changeMessageAC = (newDialogText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newDialogText} as const
}

const initialState: DialogsPageInitialStateType = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
    ],
    messages: [
        {id: 1, message: "hello"},
        {id: 2, message: "How are you?"},
    ],
    newMessageText: ""
}


const dialogsReducer = (state: DialogsPageInitialStateType = initialState, action: ActionType): DialogsPageInitialStateType => {
    /*if (action.type === SEND_MESSAGE) {
        const newMessage: MessageType = {
            id: 3,
            message: action.newMessageText
        };
        state.message.push(newMessage)
        state.newMessageText = ""
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageText = action.newDialogText
    }
    return state;*/

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText: action.newDialogText
            }
        case SEND_MESSAGE: {
            let body = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 3, message: body}],
                newMessageText: ""
            }
        }
        default: {
            return state
        }

    }

}
export {
    dialogsReducer
}
