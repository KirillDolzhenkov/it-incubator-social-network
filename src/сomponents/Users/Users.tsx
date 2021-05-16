import React from "react";
import {usersPageInitialStateType, UsersType} from "../../redux/users-reducer";
import stylesModule from "./Users.module.css"

type onPageGangedType = {
    onPageGanged: (page: number)=>void
}
export type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    usersPage: usersPageInitialStateType
    setCurrentPage: (pageValue: number) => void
    setTotalUsersCount: (countValue: number) => void
}


const Users: React.FC<UsersPropsType & onPageGangedType> = (props) => {

    let pagesCount = Math.ceil(props.usersPage.totalUserCount / props.usersPage.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (

        <div>
            {
                pages.map(p => {
                    return (
                        <span
                            className={props.usersPage.currentPage === p ? stylesModule.selectedPage : ""}
                            onClick={() => {
                                props.onPageGanged(p);
                            }}
                        >{p} </span>

                    );
                })
            }

            {/*<button onClick={this.getUsers}>Get users</button>*/}
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <div>img</div>
                    <div>
                        {u.followed
                            ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>unfollow</button>
                            :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>follow</button>
                        }
                    </div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                    <hr/>
                </div>)
            }
        </div>
    )
}


export {
    Users
}