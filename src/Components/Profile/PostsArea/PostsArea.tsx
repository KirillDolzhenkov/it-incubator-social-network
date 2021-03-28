import React, {ChangeEvent} from "react";
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

    let postsElements = props.posts
        .map(p => <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}
        />)

    const addItem = () => {
        props.addPost(props.newPostText)
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.messageForNewPost(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            addItem();
        }
    }

    return (
        <div className={styleModule.postBlock}>
            <h3>My posts</h3>
            <hr/>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={onPostChange}
                    onKeyPress={onKeyPressHandler}
                    placeholder="Write something"
                />
            </div>
            <div>
                <button onClick={addItem}>Send</button>
            </div>
            <div className={styleModule.posts}>
                {postsElements}
            </div>
        </div>
    )
}
