/*export type PostType = {
    id: number
    messages: string
    likesCount: number
}*/


type locationType = {
    city: string
    country: string
}
export type usersType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: Array<any>
}

export type usersPageInitialStateType = {
    users: Array<any>
}

const initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'I love react', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: true, fullName: 'Victor', status: 'I love react', location: {city: 'Mogilev', country: 'Belarus'}},
    ]
}
type ActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"

export const followAC = () => {
    return {type: FOLLOW} as const
}
export const unfollowAC = () => {
    return {type: UNFOLLOW} as const
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

