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

    switch (action.type) {
        case "SN/DIALOGS/ADD_MESSAGE": {
            let body = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 3, message: body}],
                newMessageText: ""
            }
        }
        case "SN/DIALOGS/SET_NEW_MESSAGE_TEXT":
            return {
                ...state,
                newMessageText: action.newDialogText
            }
        default: {
            return state;
        }

    }

}

export const addMessageAC = (newMessageText: string) => {
    return {type: "SN/DIALOGS/ADD_MESSAGE", newMessageText} as const;
}
export const changeMessageAC = (newDialogText: string) => {
    return {type: "SN/DIALOGS/SET_NEW_MESSAGE_TEXT", newDialogText} as const;
}

export {
    dialogsReducer
}
