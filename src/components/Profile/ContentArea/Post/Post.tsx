import React from "react";

import styles from "./Post.module.css"

//types:
type PostPropsType = {
    id: number
    message: string
    likesCount: number
    isLiked: boolean
    addLike: (id: number, isLiked: boolean) => void
    removeLike: (id: number, isLiked: boolean) => void
}

//Functional Component:
const Post: React.FC<PostPropsType> = (props) => {

    return (
        <div className={styles.items}>
            <img src='https://cdn4.iconfinder.com/data/icons/spring-festival/512/man-512.png' alt=""/>
            <b>{"UserName"} </b> {/*<-- props.UserName !!!*/}
            <span>{props.message}</span>
            {/*<span >♥{props.likesCount}</span>*/}
            <div>
            {
                props.isLiked
                    ? <button onClick={() => {
                        props.removeLike(props.id, props.isLiked);
                    }}>Liked ♥{props.likesCount}</button>
                    :
                    <button onClick={() => {
                        props.addLike(props.id, props.isLiked);
                    }}>Like ♡{props.likesCount}</button>
            }
            </div>
            <hr/>
        </div>
    )
}

export {
    Post
}