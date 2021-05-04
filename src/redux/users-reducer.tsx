type locationType = {
    city: string
    country: string
}
type usersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: locationType
}

export type usersPageInitialStateType = {
    users: Array<usersType>
}

const initialState: usersPageInitialStateType = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I love react', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Victor', status: 'I love react', location: {city: 'Mogilev', country: 'Belarus'}},
    ]
}
type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export const followAC = (userId: number) => {
    return {type: FOLLOW, userId} as const
}
export const unfollowAC = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
}
export const setUsersAC = (users: Array<usersType>) => {
    return {type: SET_USERS, users} as const
}

const usersReducer = (state: usersPageInitialStateType = initialState, action: ActionType): usersPageInitialStateType => {


    switch (action.type) {
        case FOLLOW:{
            return {...state, users: state.users.map(u=>{
                if(u.id === action.userId){
                    return {...u, followed: true}
                }
                return u
                })
            }
        }
        case UNFOLLOW:{
            return {...state, users: state.users.map(u=>{
                if(u.id === action.userId){
                    return {...u, followed: false}
                }
                return u
                })
            }
        }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export {
    usersReducer
}

