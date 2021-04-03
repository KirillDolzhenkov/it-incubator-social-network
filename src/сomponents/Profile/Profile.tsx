import React from "react";
/*import styleModule from "./Profile.module.css";*/
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArea} from "./PostsArea/PostsArea";
import {ActionType, RootStateType} from "../../redux/store";


type ProfilePropsType = {
    state: RootStateType
    dispatch: (action: ActionType) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsArea
                dispatch={props.dispatch}
                posts={props.state.profilePage.posts}
                newPostText={props.state.profilePage.newPostText}
            />
        </div>
    );
}

