import React from "react";

import style from "./Post.module.css"
import defaultSmallUserPhoto from "../../../../assets/images/defaultSmallUserPhoto.png"

//types:
type PostPropsType = {
    id: number
    message: string
    likesCount: number
    isLiked: boolean
    addLike: (id: number, isLiked: boolean) => void
    removeLike: (id: number, isLiked: boolean) => void
}

//functional component:
const Post: React.FC<PostPropsType> = (props) => {

    return (
        <>
            <div className={style.post}>
                <div className={style.items}>
                    <div>
                        {/*need to fix: */}
                        <img src={defaultSmallUserPhoto} alt="defaultSmallUserPhoto"/>
                        {/* <img src={
                        u.photos.small !== null
                            ? u.photos.small
                            : defaultSmallUserPhoto //defaultAsset
                    }/>*/}
                    </div>
                    <div className={style.postMessage}>
                        <div>
                            <b>{"UserName"} </b> {/*<-- props.UserName !!!*/}
                        </div>

                        <div>
                            <div>{props.message}</div>
                        </div>

                    </div>

                </div>
                <div className={style.reactions}>
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
                    <div> <button> Write comment</button> </div>
                    <div> <button> Share</button> </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export {
    Post
}