import axios from "axios";
import React from "react";
import {usersPageInitialStateType, UsersType} from "../../redux/users-reducer";
import stylesModule from "./Users.module.css"

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    usersPage: usersPageInitialStateType
    setCurrentPage: (pageValue: number) => void
}

class Users extends React.Component<UsersPropsType, UsersPropsType> {
    /*constructor(props: UsersPropsType) {
        super(props);*/

    componentDidMount() {
        if (this.props.usersPage.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${
                this.props.usersPage.currentPage}&count=${
                this.props.usersPage.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    /*getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }

    }*/

    onPageGanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${
            p}&count=${
            this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {

        let pagesCount = Math.ceil(this.props.usersPage.totalUserCount / this.props.usersPage.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (

            <div>
                {
                    pages.map(p => {
                        return (
                            <span // <-- need add thin/bold css to span
                                /*className={this.props.usersPage.currentPage === p && stylesModule.selectedPage}*/
                                onClick={() => {this.onPageGanged(p)}
                                }
                            >{p}</span>

                        );
                    })
                }

                {/*<button onClick={this.getUsers}>Get users</button>*/}
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                        <div>img</div>
                        <div>
                            {u.followed
                                ?
                                <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>unfollow</button>
                                :
                                <button onClick={() => {
                                    this.props.follow(u.id)
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
}


export {
    Users
}