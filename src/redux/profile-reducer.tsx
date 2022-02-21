import {Dispatch} from "redux";

import {profileAPI} from "../api/api";
import {AppActionType} from "./redux-store";

//types:
type PostType = {
    id: number
    message: string
    likesCount: number
    isLiked: boolean
}
export type ProfileInitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfilePageType | null
    status: string | null
}

export type ProfilePageType = {
    aboutMe: string,
    contacts: LinksType,
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos: PhotosType
}
type LinksType = {
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

export type ProfileActionType = ReturnType<typeof addPost>
    | ReturnType<typeof setNewPostText>
    | ReturnType<typeof addLike>
    | ReturnType<typeof removeLike>
    | ReturnType<typeof setProfile>
    | ReturnType<typeof setStatus>


//initialState:
const initialState: ProfileInitialStateType = {
    posts: [
        {
            id: 21313,
            message: "testPost",
            likesCount: 1,
            isLiked: false
        }
    ],
    newPostText: "",
    profile: null,
    status: null
}

//reducer:
const profileReducer = (state: ProfileInitialStateType = initialState, action: AppActionType): ProfileInitialStateType => {

    switch (action.type) {
        case "SN/PROFILE/ADD_POST": {
            const stateCopy = {...state}
            const newPost: PostType = {
                id: Math.floor(new Date().valueOf() * Math.random()), //Create a unique number using javaScriptTime
                message: state.newPostText,
                likesCount: 0,
                isLiked: false
            };
            stateCopy.posts = [newPost, ...state.posts];
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case"SN/PROFILE/SET_NEW_POST_TEXT": {
            const stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        case "SN/PROFILE/ADD_LIKE": {
            const stateCopy = {
                ...state, posts: state.posts.map(p => {
                    if (p.id === action.id) {
                        return {...p, isLiked: true, likesCount: p.likesCount + 1}
                    }
                    return p;
                })
            }
            return stateCopy;
        }
        case "SN/PROFILE/REMOVE_LIKE": {
            const stateCopy = {
                ...state, posts: state.posts.map(p => {
                    if (p.id === action.id) {
                        return {...p, isLiked: false, likesCount: p.likesCount - 1}
                    }
                    return p;
                })
            }
            return stateCopy;
        }
        case "SN/PROFILE/SET_PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SN/PROFILE/SET_STATUS":
            return {...state, status: action.status}
        default:
            return state;
    }
}

//action creators:
export const addPost = (newPost: string) => {
    return {type: "SN/PROFILE/ADD_POST", newPost} as const
}
export const setNewPostText = (newText: string) => {
    return {type: "SN/PROFILE/SET_NEW_POST_TEXT", newText} as const
}
export const addLike = (id: number, isLiked: boolean) => {
    return {type: "SN/PROFILE/ADD_LIKE", id, isLiked} as const
}
export const removeLike = (id: number, isLiked: boolean) => {
    return {type: "SN/PROFILE/REMOVE_LIKE", id, isLiked} as const
}
export const setProfile = (profile: ProfilePageType) => {
    return {type: "SN/PROFILE/SET_PROFILE", profile} as const
}
export const setStatus = (status: string) => {
    return {type: "SN/PROFILE/SET_STATUS", status} as const
}


//thunk creators:
export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch<AppActionType>) => {
        profileAPI
            .getProfile(userId)
            .then(response => {
                dispatch(setProfile(response.data));
            });
    }
}
export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch<AppActionType>) => {
        profileAPI
            .getUserStatus(userId) //+userId ??
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}
export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch<AppActionType>) => {
        profileAPI
            .updateUserStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
            });
    }
}

export {
    profileReducer
}