import React from "react";
import { NavLink } from "react-router-dom";
import {usersPageInitialStateType, UsersType} from "../../redux/users-reducer";
import stylesModule from "./Users.module.css"

type onPageGangedType = {
    onPageGanged: (page: number) => void
}

export type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    usersPage: usersPageInitialStateType
    setCurrentPage: (pageValue: number) => void
    setTotalUsersCount: (countValue: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


const Users: React.FC<UsersPropsType & onPageGangedType> = (props) => {


    let pageCount = Math.ceil(props.usersPage.totalUserCount / props.usersPage.pageSize);
    let current = []
    for (let i = 1; i <= pageCount; i++) {
        current.push(i)
    }

    let startValue = 0; //need to create state
    let endValue = 7; //need to create state

    return <div>
        <button >{'« prev'}</button>
        {
            current.map(p =>  {

                return <span
                    onClick={() => {
                        props.onPageGanged(p)
                    }}
                    className={p === props.usersPage.currentPage ? stylesModule.selectedPage : ''}> | {p} | </span>
            }).slice(startValue, endValue)  //slice !!!!!!
        }

        <button>{'next  »'}</button>
        {
            props.usersPage.users.map(u => <div key={u.id}>

                <NavLink to={"/profile/" + u.id}>
                    <div className={stylesModule.items}>
                        <img src={"https://cdn4.iconfinder.com/data/icons/spring-festival/512/man-512.png"}/>
                    </div>
                    {/*<div>
                        <img src={u.photos.small !== null
                            ? u.photos.small
                            : usersPhoto
                        }
                             alt={"Photo"} className={styles.usersPhoto}/>
                    </div>*/}
                </NavLink>

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
}

export {
    Users
}