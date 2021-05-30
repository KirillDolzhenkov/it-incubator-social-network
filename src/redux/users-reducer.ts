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

const initialState: usersPageInitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false
/*    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I love react', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Victor', status: 'I love react', location: {city: 'Mogilev', country: 'Belarus'}},
    ]*/
}

type ActionType = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

// constants:
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


const usersReducer = (
    state: usersPageInitialStateType = initialState, action: ActionType): usersPageInitialStateType => {


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
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

// Action Creators:
export const follow = (userId: number) => {
    return {type: FOLLOW, userId} as const;
}
export const unfollow = (userId: number) => {
    return {type: UNFOLLOW, userId} as const;
}
export const setUsers = (users: Array<UsersType>) => {
    return {type: SET_USERS, users} as const;
}
export const setCurrentPage = (pageValue: number) => {
    return { type: SET_CURRENT_PAGE, pageValue} as const;
}
export const setTotalUsersCount = (countValue: number) => {
    return {type: SET_TOTAL_USERS_COUNT, countValue}  as const;
}
export const toggleIsFetching = (isFetching: boolean)=> {
    return {type: TOGGLE_IS_FETCHING, isFetching} as const;
}

export {
    usersReducer
}

