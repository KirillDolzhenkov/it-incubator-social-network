import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}
export type DialogsPageType = {
    dialog: Array<DialogType>
    message: Array<MessageType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}

export type ActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeMessageAC>

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

const SEND_POST = "ADD-POST"
const UPDATE_NEW_POST_BODY = "CHANGE-POST-TEXT"
const SEND_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "CHANGE-MESSAGE-TEXT"

export const addPostAC = (newPostText: string) => {
    return {type: SEND_POST, newPostText} as const
}
export const changePostAC = (newPostText: string) => {
    return {type: UPDATE_NEW_POST_BODY, newPostText} as const
}
export const addMessageAC = (newMessageText: string) => {
    return {type: SEND_MESSAGE, newMessageText} as const
}
export const changeMessageAC = (newDialogText: string) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, newDialogText} as const
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 12},
                {id: 2, message: 'Wats up', likesCount: 13},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialog: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Sasha"},
            ],
            message: [
                {id: 1, message: "hello"},
                {id: 2, message: "How are you?"},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('rerenderEntireTree')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

export {
    store
}