import React from "react";
/*import styleModule from "./Header.module.css"*/
import Logo_01 from "./logo_transparent_03.png";
import Logo_02 from "./logo_transparent_02.png";

type HeaderPropsType = {}


export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className='header'>
            <img src={Logo_01}/><img src={Logo_02}/>
        </header>
    )
}