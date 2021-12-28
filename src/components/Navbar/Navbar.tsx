import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Navbar.module.css";

//types:
type NavbarPropsType = {}

//functional component:
const Navbar: React.FC<NavbarPropsType> = (props) => {
    return (
        <div className={style.navbar}>
            <div className={style.item}>
                <NavLink to={"/Profile"} activeClassName={style.active}>My profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/News"} activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/Dialogs"} activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/Users"} activeClassName={style.active}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/Music"} activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to={"/Settings"} activeClassName={style.active}>Settings</NavLink>
            </div>
        </div>
    )
}

export {
    Navbar
}