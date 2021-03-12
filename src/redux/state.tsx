
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
    post: Array<PostType>
}

export type DialogsPageType = {
    dialog: Array<DialogType>
    message: Array<MessageType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage: {
        post: [
            {id: 1, message: 'Hello', likesCount: 12},
            {id: 2, message: 'Wats up', likesCount: 13},
        ],
    },
    dialogsPage: {
        dialog: [
            {id:1, name: 'Dima'},
            {id:2, name: 'Sasha'},
        ],
        message: [
            {id:1, message: 'hello'},
            {id:2, message: 'How are you?'},
        ],
    },

}

export default state;