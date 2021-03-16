import React from "react";
import styleModule from "./Post.module.css";


type PostPropsType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostPropsType> = (props) => {
    return (
        <div className={styleModule.items}>
            <img src='https://cdn4.iconfinder.com/data/icons/spring-festival/512/man-512.png'/>
            <span>{props.message}</span><br/>
            <span>♥{props.likesCount}</span>
        </div>
    )
}
