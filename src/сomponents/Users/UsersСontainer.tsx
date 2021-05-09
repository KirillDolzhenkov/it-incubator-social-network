import { connect } from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, usersPageInitialStateType, usersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    usersPage: usersPageInitialStateType
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<usersType>) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType=> {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=> {
        return {
            follow: (userId)=>{
                dispatch(followAC(userId))
            },
            unfollow: (userId)=>{
                dispatch(unfollowAC(userId))
            },
            setUsers: (users)=>{
                dispatch(setUsersAC(users))
            }
        }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export {
    UsersContainer
}