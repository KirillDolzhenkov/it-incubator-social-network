import {PostsArea} from "./PostsArea";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPostAC, changePostAC, ProfilePageType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";


/*type PostsAreaContainerPropsType = {
    store: StoreType
}*/

/*const PostsAreaContainer: React.FC<PostsAreaContainerPropsType> = (props) => {


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
}*/

type  mapStateToPropsType = {
    profilePage: ProfilePageType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType =>{
    return {
        profilePage: state.profilePage
    }
}

type mapDispatchToPropsType = {
    updateNewPostText: (text: string)=> void
    addPost: (text: string)=> void
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType =>{
    return {
        updateNewPostText: (text: string)=>{
            dispatch(changePostAC(text))
        },
        addPost: (text: string)=>{
            dispatch(addPostAC(text))
        },
    }
}

const PostsAreaContainer = connect(mapStateToProps, mapDispatchToProps)(PostsArea);

export {
    PostsAreaContainer
}
