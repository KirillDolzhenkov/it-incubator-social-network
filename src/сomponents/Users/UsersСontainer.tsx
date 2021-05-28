import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    usersPageInitialStateType,
    UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Users, UsersPropsType} from "./Users";
import React from "react";
import axios from "axios";
import {Preloader} from "../common/Preloader/Preloader";

type mapStateToPropsType = {
    usersPage: usersPageInitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageValue: number) => void
    setTotalUsersCount: (countValue: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));

        },
        setCurrentPage: (pageValue) => {
            dispatch(setCurrentPageAC(pageValue));
        },
        setTotalUsersCount: (countValue) => {
            dispatch(setTotalUsersCountAC(countValue));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }

}

class UsersContainer extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${
            this.props.usersPage.currentPage}&count=${
            this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount); // TOO MANY PAGES !!!!!!
            });
    }

    onPageGanged = (p: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${
            this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <>
                {/*{this.props.usersPage.isFetching ? <div> loading... </div> : null}*/}
                <Preloader isFetching={this.props.usersPage.isFetching}/>
                <Users
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setUsers={this.props.setUsers}
                    usersPage={this.props.usersPage}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    onPageGanged={this.onPageGanged}
                    toggleIsFetching={this.props.toggleIsFetching}
                />
            </>
        )
    }
}


/*const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export {
    UsersContainer
}*/
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);