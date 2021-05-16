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


type ActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof changeMessageAC>

const SEND_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "CHANGE-MESSAGE-TEXT";

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

export const addMessageAC = (newMessageText: string) => {
    return {type: SEND_MESSAGE, newMessageText} as const;
}
export const changeMessageAC = (newDialogText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newDialogText} as const;
}

const dialogsReducer = (state: DialogsPageInitialStateType = initialState, action: ActionType): DialogsPageInitialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText: action.newDialogText
            }
        case SEND_MESSAGE: {
            let body = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 3, message: body}],
                newMessageText: ""
            }
        }
        default: {
            return state;
        }

    }

}
export {
    dialogsReducer
}
