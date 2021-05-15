type locationType = {
    city: string
    country: string
}
export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: locationType
}

export type usersPageInitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}

const initialState: usersPageInitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
/*    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I love react', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Victor', status: 'I love react', location: {city: 'Mogilev', country: 'Belarus'}},
    ]*/
}
type ActionType = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";


const usersReducer = (state: usersPageInitialStateType = initialState, action: ActionType): usersPageInitialStateType => {


    switch (action.type) {
        case FOLLOW:{
            return {...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:{
            return {...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
       /* case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }*/
        case SET_USERS:{
            return {...state, users: [ ...action.users]}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.pageValue}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUserCount: action.countValue}
        }
        default:
            return state;
    }
}

export const followAC = (userId: number) => {
    return {type: FOLLOW, userId} as const;
}
export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId} as const;
}
export const setUsersAC = (users: Array<UsersType>) => {
    return {type: SET_USERS, users} as const;
}
export const setCurrentPageAC = (pageValue: number) => {
    return { type: SET_CURRENT_PAGE, pageValue} as const;
}
export const setTotalUsersCountAC = (countValue: number) => {
    return {type: SET_TOTAL_USERS_COUNT, countValue}  as const;
}

export {
    usersReducer
}

