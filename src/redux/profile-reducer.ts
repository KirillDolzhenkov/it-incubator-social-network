export type PostType = {
    id: number
    messages: string
    likesCount: number
}
export type ProfilePageInitialStateType = {
    posts: Array<PostType>
    newPostText: string

}

const initialState = {
    posts: [
        {id: 1, messages: 'Hello', likesCount: 12},
        {id: 2, messages: 'Wats up', likesCount: 13},
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

const profileReducer = (state: ProfilePageInitialStateType = initialState, action: ActionType): ProfilePageInitialStateType => {
    /*if (action.type === SEND_POST) {
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
}*/

    switch (action.type) {
        case UPDATE_NEW_POST_BODY: {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case SEND_POST: {
            let body = state.newPostText
            return  {
                ...state,
                posts: [{id: 3, messages: body, likesCount: 0},...state.posts],
                newPostText: ""
            }
        }
        default:
            return state;
    }
}

export {
    profileReducer
}

