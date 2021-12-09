import React from "react";
import {NavLink} from "react-router-dom";

import style from "./Header.module.css";
import logo1 from "../../assets/images/logo_part_1.png";
import logo2 from "../../assets/images/logo_part_2.png";


//types:
type HeaderPropsType = {
    isAuth: boolean
    login: null | string
}

//function component:
const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={style.header}>
            <div className={style.logoArea}>
                <div>
                    <img src={logo1} alt="logoName1"/>
                </div>
                <div>
                    <img src={logo2} alt="logoName2"/>
                </div>
            </div>
            <div className={style.loginBlock}>
                {
                    props.isAuth
                        ? <div>
                            <span style={{color: "white"}}>{props.login} </span> {/*need to create own style*/}
                            <NavLink to={"/login"}>Logout</NavLink>
                        </div>
                        : <div>
                            <NavLink to={"/login"}>Login </NavLink>
                            <NavLink to={"/login"}>Signup </NavLink>
                        </div>
                }
            </div>
        </div>
    )
}

export {
    Header
}