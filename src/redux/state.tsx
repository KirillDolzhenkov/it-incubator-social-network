/*import {rerenderEntireTree} from "../render";*/
let rerenderEntireTree = () => {
    console.log('rerenderEntireTree')
}

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
let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', likesCount: 12},
            {id: 2, message: 'Wats up', likesCount: 13},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialog: [
            {id:1, name: "Dima"},
            {id:2, name: "Sasha"},
        ],
        message: [
            {id:1, message: "hello"},
            {id:2, message: "How are you?"},
        ],
        newMessageText: ''
    },

}

export const messageForNewPost = (newPostText: string) => {
    state.profilePage.newPostText = newPostText
    rerenderEntireTree();
}
export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree();
}

export const addMessage = (messageText: string) => {
    let newMessage: MessageType = {
        id: 3,
        message: messageText
    }
    state.dialogsPage.message.push(newMessage)
}

export const subscribe = (observer: ()=>void) => {
    rerenderEntireTree = observer;
}

export default state;