//types:
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
    isFetching: boolean
}

type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

const initialState: usersPageInitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
}

const usersReducer = (
    state: usersPageInitialStateType = initialState, action: ActionType): usersPageInitialStateType => {


    switch (action.type) {
        case "SN/USERS/FOLLOW":{
            return {...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case "SN/USERS/UNFOLLOW":{
            return {...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case "SN/USERS/SET_USERS":{
            return {...state, users: [ ...action.users]}
        }
        case "SN/USERS/SET_CURRENT_PAGE":{
            return {...state, currentPage: action.pageValue}
        }
        case "SN/USERS/SET_TOTAL_USERS_COUNT": {
            return { ...state, totalUserCount: action.countValue}
        }
        case "SN/USERS/TOGGLE_IS_FETCHING": {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

// action creators:
export const follow = (userId: number) => {
    return {type: "SN/USERS/FOLLOW", userId} as const;
}
export const unfollow = (userId: number) => {
    return {type: "SN/USERS/UNFOLLOW", userId} as const;
}
export const setUsers = (users: Array<UsersType>) => {
    return {type: "SN/USERS/SET_USERS", users} as const;
}
export const setCurrentPage = (pageValue: number) => {
    return { type: "SN/USERS/SET_CURRENT_PAGE", pageValue} as const;
}
export const setTotalUsersCount = (countValue: number) => {
    return {type: "SN/USERS/SET_TOTAL_USERS_COUNT", countValue}  as const;
}
export const toggleIsFetching = (isFetching: boolean)=> {
    return {type: "SN/USERS/TOGGLE_IS_FETCHING", isFetching} as const;
}

export {
    usersReducer
}

