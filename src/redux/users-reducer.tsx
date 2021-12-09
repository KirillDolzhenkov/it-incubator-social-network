import { Dispatch } from "redux";

import {usersAPI} from "../api/api";
import {AppActionType} from "./redux-store";

//types:
type LocationType = {
    country: string
    city: string
}
type PhotosType = {
    small: string
    large: string
}
export type UsersType = {
    id: number
    followed: boolean
    photos: PhotosType
    name: string
    status: string
    location: LocationType
}
export type UsersInitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number,
    isFetching: boolean,
    followingInProgress: any[]
}
export type UsersActionType = | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setFollowingProgress>

//initialState:
const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

//reducer:
const usersReducer = (state: UsersInitialStateType = initialState, action: AppActionType) => {
    switch (action.type) {
        case "SN/USERS/FOLLOW": {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case "SN/USERS/UNFOLLOW": {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case "SN/USERS/SET_USERS": {
            return {...state, users: [...action.users]} //need to return {...state, users: [...state.users, ...action.users]}
        }
        case "SN/USERS/SET_CURRENT_PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SN/USERS/SET_TOTAL_USERS_COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "SN/USERS/SET_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : [...state.followingInProgress.filter(id => id !== action.id)]
            }
        }
        default: {
            return state;
        }
    }
}

//action creators:
export const follow = (id: number) => {
    return {type: "SN/USERS/FOLLOW", id} as const
}
export const unFollow = (id: number) => {
    return {type: "SN/USERS/UNFOLLOW", id} as const
}
export const setUsers = (users: Array<UsersType>) => {
    return {type: "SN/USERS/SET_USERS", users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: "SN/USERS/SET_CURRENT_PAGE", currentPage} as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {type: "SN/USERS/SET_TOTAL_USERS_COUNT", totalCount} as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {type: "SN/USERS/SET_IS_FETCHING", isFetching} as const
}
export const setFollowingProgress = (followingInProgress: boolean, id: number) => {
    return {type: "SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS", followingInProgress, id} as const
}

//thunk creators:
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<AppActionType>) => {
        dispatch(setIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        } );
    }
}
export const unFollowThunkCreator =(userId: number)=> {
    return (dispatch: Dispatch<AppActionType>) => {
        dispatch(setFollowingProgress(true, userId));
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unFollow(userId));
                }
                dispatch(setFollowingProgress(false, userId));
            });
    }
}
export const followThunkCreator =(userId: number)=> {
    return (dispatch: Dispatch<AppActionType>) => {
        dispatch(setFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(follow(userId));
                }
                dispatch(setFollowingProgress(false, userId));
            });
    }
}

export {
    usersReducer
}