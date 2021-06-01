import React from "react";
import {PostsAreaContainer} from "./PostsArea/PostsAreaContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageInitialStateType, ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: any
}
export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <PostsAreaContainer/>
        </div>
    )
}

