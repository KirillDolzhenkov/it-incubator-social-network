import React from "react";
import {addPostAC, changePostAC, StoreType} from "../../../redux/store";
import {PostsArea} from "./PostsArea";


type PostsAreaContainerPropsType = {
    store: StoreType
}

const PostsAreaContainer: React.FC<PostsAreaContainerPropsType> = (props) => {
    const state = props.store.getState();

    const addPost = (text: string) => {
        props.store.dispatch(addPostAC(text))
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(changePostAC(text))
    }

    return (
        <div>
            <PostsArea
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}
            />
        </div>
    )
}

export {
    PostsAreaContainer
}
