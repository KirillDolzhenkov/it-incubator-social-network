import {ActionType} from "./store";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageInitialStateType = {
    posts: Array<PostType>
    newPostText: string

}

const SEND_POST = "ADD-POST"
const UPDATE_NEW_POST_BODY = "CHANGE-POST-TEXT"

const initialState = {
    posts: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'Wats up', likesCount: 13},
    ],
    newPostText: ''
}

export const addPostAC = (newPostText: string) => {
    return {type: SEND_POST, newPostText} as const
}
export const changePostAC = (newPostText: string) => {
    return {type: UPDATE_NEW_POST_BODY, newPostText} as const
}

const profileReducer = (state: ProfilePageInitialStateType = initialState, action: ActionType): ProfilePageInitialStateType => {
    if (action.type === SEND_POST) {
        const newPost: PostType = {
            id: 3,
            message: action.newPostText,
            likesCount: 0
        };
        state.posts.unshift(newPost)
        state.newPostText = ""
    } else if (action.type === UPDATE_NEW_POST_BODY) {
        state.newPostText = action.newPostText
    }
    return state;
}

export {
    profileReducer
}

