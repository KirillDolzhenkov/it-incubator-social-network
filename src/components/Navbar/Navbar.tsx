import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

//types:
type NavbarPropsType = {}

//function component:
const Navbar: React.FC<NavbarPropsType> = (props) => {
    return (
        <div className={styles.navbar}>
            <div className={styles.item}>
                <NavLink to={"/Profile"} activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={"/Dialogs"} activeClassName={styles.active}>Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={"/Users"} activeClassName={styles.active}>Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={"/News"} activeClassName={styles.active}>News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={"/Music"} activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={"/Settings"} activeClassName={styles.active}>Settings</NavLink>
            </div>
        </div>
    )
}

export {
    Navbar
}