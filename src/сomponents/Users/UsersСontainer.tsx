import { connect } from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersPageInitialStateType,
    UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Users, UsersPropsType} from "./Users";
import React from "react";
import axios from "axios";

type mapStateToPropsType = {
    usersPage: usersPageInitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageValue: number)=> void
    setTotalUsersCount: (countValue: number)=>void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType=> {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=> {
        return {
            follow: (userId)=>{
                dispatch(followAC(userId));
            },
            unfollow: (userId)=>{
                dispatch(unfollowAC(userId));
            },
            setUsers: (users)=>{
                dispatch(setUsersAC(users));

            },
            setCurrentPage: (pageValue)=> {
                dispatch(setCurrentPageAC(pageValue));
            },
            setTotalUsersCount: (countValue)=> {
                dispatch(setTotalUsersCountAC(countValue))
            }
        }

}

class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount) // TOO MANY PAGES !!!!!!
                });
        }
    }

    onPageGanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                setUsers={this.props.setUsers}
                usersPage={this.props.usersPage}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                onPageGanged={this.onPageGanged}
            />
        )
    }
}

/*
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export {
    UsersContainer
}*/
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);