import {AppActionType} from "./redux-store";

//types:
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type DialogsInitialStateType = {
    dialogs: Array<DialogsDataType>,
    messages: Array<MessagesDataType>,
    newMessageText: string
}
export type DialogsActionType = ReturnType<typeof addMessage>
    | ReturnType<typeof setNewMessageText>

//initialState:
const initialState: DialogsInitialStateType = {
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

//reducer:
const dialogsReducer = (state: DialogsInitialStateType = initialState, action: AppActionType) => { //need to rename to dialogReducer
    if (action.type === "SN/DIALOGS/ADD_MESSAGE") {
        const stateCopy = {...state}
        const newMessage: MessagesDataType = {
            id: Math.floor(new Date().valueOf() * Math.random()), //Creating a unique number with javascript time method
            message: stateCopy.newMessageText,
        };
        stateCopy.messages = [...state.messages, newMessage];
        stateCopy.newMessageText = "";
        return stateCopy;

    } else if (action.type === "SN/DIALOGS/SET_NEW_MESSAGE_TEXT") {
        const stateCopy = {...state};
        stateCopy.newMessageText = action.newText;
        return stateCopy;

    } else {
        return state;
    }
}

//action creators:
export const addMessage = (newMessage: string) => {
    return {type: "SN/DIALOGS/ADD_MESSAGE", newMessage} as const
}
export const setNewMessageText = (newText: string) => {
    return {type: "SN/DIALOGS/SET_NEW_MESSAGE_TEXT", newText} as const
}

export {
    dialogsReducer
}