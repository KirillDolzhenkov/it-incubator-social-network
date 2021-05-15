import React from "react";
import {usersPageInitialStateType, UsersType} from "../../redux/users-reducer";
import stylesModule from "./users.module.css"

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    usersPage: usersPageInitialStateType
}

const Users: React.FC<UsersPropsType> = (props) => {
    /*let usersElements =*/
    return (
        <div>

            {
                props.usersPage.users.map(u => <div key={u.id} >
                    <div>img</div>
                    <div>
                        { u.followed
                            ?
                            <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                            :
                            <button onClick={()=>{props.follow(u.id)}}>follow</button>
                        }
                    </div>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span><hr/>
                </div>)
            }
        </div>
    )
}


export {
    Users
}