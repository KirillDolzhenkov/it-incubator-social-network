//types:
export type PostsType = {
    id: number
    messages: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
}

export type ProfileType = {
    aboutMe: string,
    contacts: ConstantsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: PhotosType
}
export type ConstantsType = {
    facebook: null | string,
    website: null | string,
    vk: null | string,
    twitter: null | string,
    instagram: null | string,
    youtube: null | string,
    github: null | string,
    mainLink: null | string
}

export type PhotosType = { small: string, large: string }

type ActionType = ReturnType<typeof addPostAC>
    | ReturnType<typeof changePostAC>
    | ReturnType<typeof setUserProfile>

const initialState: ProfilePageType = {
    posts: [
        {id: 1, messages: 'Hello', likesCount: 12},
        {id: 2, messages: 'Wats up', likesCount: 13},
    ],
    newPostText: "",
    profile: null
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {

    switch (action.type) {
        case "SN/PROFILE/ADD_POST": {
            let body = state.newPostText;
            return {
                ...state,
                posts: [{id: 3, messages: body, likesCount: 0}, ...state.posts],
                newPostText: ""
            }
        }
        case "SN/PROFILE/CHANGE_POST": {
            return {
                ...state,
                newPostText: action.newPostText
            }
        }
        case "SN/PROFILE/SET_NEW_POST_TEXT": {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

//action creators:
export const addPostAC = (newPostText: string) => {
    return ({type: "SN/PROFILE/ADD_POST", newPostText} as const);
}
export const changePostAC = (newPostText: string) => {
    return ({type: "SN/PROFILE/CHANGE_POST", newPostText} as const);
}
export const setUserProfile = (profile: ProfileType) => {
    return ({type: "SN/PROFILE/SET_NEW_POST_TEXT", profile} as const);
}


export {
    profileReducer
}

