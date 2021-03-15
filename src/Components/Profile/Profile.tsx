import React from "react";
/*import styleModule from "./Profile.module.css";*/
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArea} from "./PostsArea/PostsArea";
import {RootStateType} from "../../redux/state";


type ProfilePropsType = {
    state: RootStateType
    addPost: Function
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsArea posts={props.state.profilePage.post} addPost={props.addPost}/>
        </div>
    );
}

