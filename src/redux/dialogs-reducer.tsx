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
    dialog: Array<DialogType>
    message: Array<MessageType>
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
        case SEND_MESSAGE: {
            const newMessage: MessageType = {
                id: 3,
                message: action.newMessageText
            }
            let stateCopy = {...state}
            stateCopy.message = [...state.message]
            stateCopy.message.push(newMessage)
            stateCopy.newMessageText = ""
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newDialogText
            return stateCopy;
        }
        default: {
            let stateCopy = {...state}
            return stateCopy;
        }

    }

}
export {
    dialogsReducer
}
