import React, {ChangeEvent} from "react";

import styles from "./ContentArea.module.css"
import {ProfileInitialStateType} from "../../../redux/profile-reducer";
import {PostContainer} from "./Post/PostContainer";

//types:
type ContentAreaPropsType = {
    profilePage: ProfileInitialStateType
    addPost: (newPostText: string) => void
    setNewPostText: (newText: string) => void
}

//functional component:
const ContentArea: React.FC<ContentAreaPropsType> = (props) => {

    const state = props.profilePage; //state!!!

    let postsElements = state.posts.map(p => <PostContainer
        key={p.id}
        message={p.message}
        id={p.id}
        likesCount={p.likesCount}
        isLiked={p.isLiked}
    />);

    const addPostHandler = () => {
        if (state.newPostText) {
            props.addPost(state.newPostText);
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget?.value;
        props.setNewPostText(newText);
    }
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addPostHandler();
        }
    }

    return (
        <div className={styles.postBlock}>
            <textarea
                value={state.newPostText}
                maxLength={100000}
                onChange={onChangeHandler}
                placeholder={"What's new?"}
                onKeyPress={onKeyPressHandler}
            />
            <span>
                <button onClick={addPostHandler}>Post</button>
            </span>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export {
    ContentArea
}