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

//functional component:
const Header: React.FC<HeaderPropsType> = (props) => {
	return (
		<div className={style.header}>
			<NavLink to={"/news"} className={style.logoArea}>
				<div>
					<img src={logo1} alt="logoName1" />
				</div>
				<div>
					<img src={logo2} alt="logoName2" />
				</div>
			</NavLink>
			<div className={style.loginBlock}>
				{props.isAuth ? (
					<div className={style.items}>
						<div>
							{/*<img src={                    //<-- no photo yet
                                    props.photos.small !== null
                                        ? props.photos.small
                                        : defaultSmallUserPhoto //defaultAsset
                                }/>*/}
						</div>
						<div>{props.login} </div>
						<NavLink to={"/login"}>Logout</NavLink>
					</div>
				) : (
					<div className={style.items}>
						<NavLink to={"/login"}>Login </NavLink>
						<NavLink to={"/login"}>Sign up </NavLink>
					</div>
				)}
			</div>
		</div>
	);
};

export {
    Header
}