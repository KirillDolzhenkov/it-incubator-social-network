import {ChangeEvent} from "react";

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
}


type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}
type ChangePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    newPostText: string
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
    newMessageText: string
}
type ChangeMessageTextActionType = {
    type: "CHANGE-MESSAGE-TEXT"
    newDialogText: string
}

export type ActionType = AddPostActionType
    | ChangePostTextActionType
    | AddMessageActionType
    | ChangeMessageTextActionType


export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: ()=>void) => void
    dispatch: (action: ActionType) => void
}

export const addPostAC = (newPostText: string):AddPostActionType => {
    return{type: "ADD-POST", newPostText}
}
export const changePostAC = (newPostText: string):ChangePostTextActionType => {
    return{type: "CHANGE-POST-TEXT", newPostText}
}
export const addMessageAC = (newMessageText: string):AddMessageActionType => {
    return{type: "ADD-MESSAGE", newMessageText}
}
export const changeMessageAC = (newDialogText: string):ChangeMessageTextActionType => {
    return{type: "CHANGE-MESSAGE-TEXT", newDialogText}
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
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber()
        } else if (action.type === 'CHANGE-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText
            this._callSubscriber()
        } else if(action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: 3,
                message: action.newMessageText
            }
            this._state.dialogsPage.message.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber()
        } else if(action.type === 'CHANGE-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newDialogText
            this._callSubscriber()
        }
    }
}

export default store;