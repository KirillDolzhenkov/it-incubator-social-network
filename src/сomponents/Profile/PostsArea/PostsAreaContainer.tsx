import React from "react";

import {PostsArea} from "./PostsArea";
import {StoreContext} from "../../../StoreContext";
import {addPostAC, changePostAC} from "../../../redux/profile-reducer";


type PostsAreaContainerPropsType = {
    /*store: StoreType*/
}

const PostsAreaContainer: React.FC<PostsAreaContainerPropsType> = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().profilePage;

                const addPost = (text: string) => {
                    store.dispatch(addPostAC(text))
                }
                const onPostChange = (text: string) => {
                    store.dispatch(changePostAC(text))
                }
                return <div>
                    <PostsArea
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        posts={state.posts}
                        newPostText={state.newPostText}
                    />
                </div>
            }
            }

        </StoreContext.Consumer>
    )
}

export {
    PostsAreaContainer
}
