import React from "react";
import {usersPageInitialStateType} from "../../redux/users-reducer";

type UsersPropsType = {
    usersPage: usersPageInitialStateType
}

const Users: React.FC<UsersPropsType> = (props) => {
    /*let usersElements =*/
    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <div>img</div>
                    <div>
                        <button>follow</button>
                    </div>
                    <div>
                        <button>unfollow</button>
                    </div>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    )
}


export {
    Users
}