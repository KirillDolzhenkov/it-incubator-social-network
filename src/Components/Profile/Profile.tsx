import React from "react";
/*import styleModule from "./Profile.module.css";*/
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArea} from "./PostsArea/PostsArea";
import {RootStateType} from "../../redux/state";


type ProfilePropsType = {
    state: RootStateType
    addPost: (postValue: string)=> void
    messageForNewPost: (inputValue: string)=> void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsArea posts={props.state.profilePage.posts}
                       newPostText={props.state.profilePage.newPostText}
                       addPost={props.addPost}
                       messageForNewPost={props.messageForNewPost}
            />
        </div>
    );
}

