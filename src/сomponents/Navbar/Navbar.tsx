import React from "react";
import stylesModule from "./Navbar.module.css";
import {NavLink} from 'react-router-dom';


type NavbarPropsType = {}

const Navbar: React.FC<NavbarPropsType> = (props) => {
    return (
        <nav className={stylesModule.nav}>
            <div className={stylesModule.item}>
                <NavLink to='/profile' activeClassName={stylesModule.active} >Profile</NavLink>
            </div>
            <div className={stylesModule.item}>
                <NavLink to='/dialogs' activeClassName={stylesModule.active}>Messages</NavLink>
            </div>
            <div className={stylesModule.item}>
                <NavLink to='/Users' activeClassName={stylesModule.active}>Users</NavLink>
            </div>
            <div className={stylesModule.item}>
                <NavLink to='/news' activeClassName={stylesModule.active}>News</NavLink>
            </div>
            <div className={stylesModule.item}>
                <NavLink to='/music' activeClassName={stylesModule.active}>Music</NavLink>
            </div>
            <div className={stylesModule.item}>
                <NavLink to='/settings'activeClassName={stylesModule.active}>Settings</NavLink>
            </div>
        </nav>
    )
}

export {
    Navbar
}
