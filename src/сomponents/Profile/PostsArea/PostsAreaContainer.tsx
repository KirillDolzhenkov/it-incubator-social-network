import React from "react";
import {addPostAC, changePostAC, StoreType} from "../../../redux/store";
import {PostsArea} from "./PostsArea";
import {StoreContext} from "../../../StoreContext";


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
