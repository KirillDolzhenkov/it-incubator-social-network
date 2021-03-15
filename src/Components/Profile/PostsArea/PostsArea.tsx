import React from "react";
import { Post } from "./Post/Post";
import styleModule from "./PostsArea.module.css";
import {PostType} from "../../../redux/state";

type PostsAreaPropsType = {
    posts: Array<PostType>
    addPost: Function
}
export const PostsArea: React.FC<PostsAreaPropsType> = (props) => {

    let postsElements = props.posts.map(p=><Post message={p.message} likesCount={p.likesCount}/>)
    let newPostText = React.createRef<HTMLTextAreaElement>()
    let addPostHandler = () => {
        let newPost = newPostText.current?.value
        props.addPost(newPost)
    }

    return (
        <div className={styleModule.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostText} placeholder='Write something'/>
            </div>
            <div>
                <button onClick={addPostHandler}>Send</button>
            </div>
            <div className={styleModule.posts}>
                {postsElements}
            </div>
        </div>
    )
}
