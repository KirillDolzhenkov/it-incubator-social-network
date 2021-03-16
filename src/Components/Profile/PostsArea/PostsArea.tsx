import React from "react";
import {Post} from "./Post/Post";
import styleModule from "./PostsArea.module.css";
import {PostType} from "../../../redux/state";

type PostsAreaPropsType = {
    posts: Array<PostType>
    addPost: (postText: string) => void
    newPostText: string
    messageForNewPost: (newPostText: string) => void
}
export const PostsArea: React.FC<PostsAreaPropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostText = React.createRef<HTMLTextAreaElement>()
    let addPostHandler = () => {
        if (newPostText.current) {
            props.addPost(newPostText.current.value)
        }

    }
    let onPostChange = () => {
        if (newPostText.current) {
            props.messageForNewPost(newPostText.current.value)
        }
    }


    return (
        <div className={styleModule.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={onPostChange}
                    ref={newPostText}
                    placeholder="Write something"
                />
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
