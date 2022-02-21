import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollowThunkCreator,
    UsersInitialStateType,
    UsersType
} from "../../redux/users-reducer";
import {usersAPI} from "../../api/api";
import {AppStateType} from "../../redux/redux-store";
import {Preloader} from "../common/Preloader/Preloader";
import preloaderStyle from "../common/Preloader/Preloader.module.css"
import {Users} from "./Users";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

//types:
type mapStateToPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any[]
}
type mapDispatchToPropsType = {
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void

    getUsersThunkCreator: (currentPage: number, pageSize: number) => void // need rename to getUsers
    unFollowThunkCreator: (userId: number) => void //need rename to follow
    followThunkCreator: (userId: number) => void //need rename to unFollow
}
type UsersClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;


//class container component:
class UsersClassContainer extends React.Component<UsersClassContainerPropsType> {

    componentDidMount() {
        //usersAPI.getUsers() request:
        this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize);
    }

    //onChanged function for pagination:
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);

        //request for re-render next page of users:
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
            });
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <div className={preloaderStyle.main}><Preloader/></div>
                        : <div>
                            <Users
                                {...this.props}
                                onPageChanged={this.onPageChanged}
                            />
                        </div>
                }
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


//HOC:
const UsersContainer = compose<React.FC>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps, {
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            setIsFetching,
            getUsersThunkCreator, // need rename to getUsers
            unFollowThunkCreator, //need rename to unFollow
            followThunkCreator,  //need rename to follow
        }),
    WithAuthRedirect,
)(UsersClassContainer);

export {
    UsersContainer
}