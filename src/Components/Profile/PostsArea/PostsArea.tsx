import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import styleModule from "./PostsArea.module.css";
import {ActionType, addPostAC, changePostAC, PostType} from "../../../redux/state";

type PostsAreaPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const PostsArea: React.FC<PostsAreaPropsType> = (props) => {

    let postsElements = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addItem = () => {
        if(props.newPostText.trim()){
            props.dispatch(addPostAC(props.newPostText))
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changePostAC(e.currentTarget.value))
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
