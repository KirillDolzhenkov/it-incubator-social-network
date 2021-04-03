import React from "react";
import styleModule from "./Navbar.module.css";
import {NavLink} from 'react-router-dom';


type NavbarType = {}

export const Navbar: React.FC<NavbarType> = (props) => {
    return (
        <nav className={styleModule.nav}>
            <div className={styleModule.item}>
                <NavLink to='/profile' activeClassName={styleModule.active} >Profile</NavLink>
            </div>
            <div className={styleModule.item}>
                <NavLink to='/dialogs' activeClassName={styleModule.active}>Messages</NavLink>
            </div>
            <div className={styleModule.item}>
                <NavLink to='/news' activeClassName={styleModule.active}>News</NavLink>
            </div>
            <div className={styleModule.item}>
                <NavLink to='/music' activeClassName={styleModule.active}>Music</NavLink>
            </div>
            <div className={styleModule.item}>
                <NavLink to='/settings'activeClassName={styleModule.active}>Settings</NavLink>
            </div>
        </nav>
    )
}
