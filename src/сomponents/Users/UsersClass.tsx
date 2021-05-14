import axios from "axios";
import React from "react";
import {usersPageInitialStateType, UsersType} from "../../redux/users-reducer";
import stylesModule from "./users.module.css"

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    usersPage: usersPageInitialStateType
}

class UsersClass extends React.Component<UsersPropsType> {
    getUsers = () =>
{
    if (this.props.usersPage.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response=>{
                this.props.setUsers(response.data.items);
            });
    }

}
    render() {
        return (
            <div>
                {
                    this.props.usersPage.users.map(u => <div key={u.id} >
                        <div>img</div>
                        <div>
                            { u.followed
                                ?
                                <button onClick={() => { this.props.unfollow(u.id)}}>unfollow</button>
                                :
                                <button onClick={()=>{ this.props.follow(u.id)}}>follow</button>
                            }
                        </div>
                        <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span><hr/>
                    </div>)
                }
            </div>
        )
    }
}


export {
    UsersClass
}