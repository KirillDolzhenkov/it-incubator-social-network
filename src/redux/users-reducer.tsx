/*export type PostType = {
    id: number
    messages: string
    likesCount: number
}*/
export type usersPageInitialStateType = {


}

const initialState = {
    posts: [
        {id: 1, fullName: 'Dmitry', status: 'I love react'},
        {id: 2, ullName: 'Victor', status: 'I love react'},
    ],
    newPostText: ""
}
type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof changePostAC>

const SEND_POST = "ADD-POST"
const UPDATE_NEW_POST_BODY = "CHANGE-POST-TEXT"

export const addPostAC = (newPostText: string) => {
    return {type: SEND_POST, newPostText} as const
}
export const changePostAC = (newPostText: string) => {
    return {type: UPDATE_NEW_POST_BODY, newPostText} as const
}

const usersReducer = (state: usersPageInitialStateType = initialState, action: ActionType): usersPageInitialStateType => {


    switch (action.type) {

        default:
            return state
    }
}

export {
    usersReducer
}

