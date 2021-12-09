import React from "react";
import {NavLink} from "react-router-dom";

import {UsersInitialStateType, UsersType} from "../../redux/users-reducer";
import defaultSmallUserPhoto from "../../assets/images/defaultSmallUserPhoto.png"
import styles from "./Users.module.css";


//types:
type UsersPropsType = {
    usersPage: UsersInitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: any[]

    //callBacksTypes (mapDispatchToPropsType):
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (p: number) => void
    setFollowingProgress: (followingProgress: boolean, id: number) => void

    //thunkTypes:
    unFollowThunkCreator: (userId: number) => void
    followThunkCreator: (userId: number) => void
}

//functional component:
const Users: React.FC<UsersPropsType> = (props) => {

    const state = props.usersPage; //state!!!

    //pages for pagination:
    const pagesCount = Math.ceil(state.totalUsersCount / state.pageSize) //.ceil rounds a number up to the next largest integer
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (

        <div className={styles.items}>
            <div>
                { //pagination:
                    pages.map(p => <span
                        className={p === state.currentPage
                            ? styles.selectedPage
                            : ''
                        }
                        onClick={() => props.onPageChanged(p)} //callBack?
                    >{p}</span>)
                }
            </div>
            <hr/>

            {
                state.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={
                                u.photos.small !== null
                                    ? u.photos.small
                                    : defaultSmallUserPhoto //defaultAsset
                            }/>
                        </NavLink>
                    </div>
                    <div><b>{u.name}</b></div>
                    <div style={{textDecoration: "underline", color: "blue"}}>{"Write message"}</div>{/*need to create style at styleModule*/}
                    <div>
                        {
                            u.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unFollowThunkCreator(u.id);
                                    }}
                                >unfollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.followThunkCreator(u.id);
                                    }}
                                >follow</button>
                        }
                    </div>
                    <div>
                        {"country:"}{u.location?.country ? u.location.country : " - "}
                    </div>
                    <div>
                        {"city:"}{u.location?.city ? u.location.city : " - "}
                    </div>
                    <hr/>
                </div>)
            }
        </div>
    )
}

export {
    Users
}