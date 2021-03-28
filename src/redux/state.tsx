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

export type StoreType = {
    _state: RootStateType
    _onChangeRender: () => void
    messageForNewPost: (newPostText: string) => void
    messageForNewDialog: (newDialogText: string) => void
    addPost: () => void
    addMessage: () => void
    subscribe: (observer: ()=>void) => void
    getState: () => RootStateType
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
            {id:1, name: "Dima"},
            {id:2, name: "Sasha"},
        ],
        message: [
            {id:1, message: "hello"},
            {id:2, message: "How are you?"},
        ],
        newMessageText: ''
    },

},
    _onChangeRender() {
        console.log('rerenderEntireTree')
    },
    messageForNewPost(newPostText: string) {
        this._state.profilePage.newPostText = newPostText
        this._onChangeRender()
    },
    messageForNewDialog(newDialogText: string) {
        this._state.dialogsPage.newMessageText = newDialogText
        this._onChangeRender()
    },
    addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._onChangeRender()
    },
    addMessage() {
        let newMessage: MessageType = {
            id: 3,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.message.push(newMessage)
        this._state.dialogsPage.newMessageText = ""
        this._onChangeRender()

    },
    subscribe(observer: ()=>void) {
        this._onChangeRender = observer
    },
    getState() {
        return this._state;
    }
}

export default store;