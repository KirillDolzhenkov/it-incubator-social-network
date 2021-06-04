import React from "react";
import {PostsAreaContainer} from "./PostsArea/PostsAreaContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    /*profile: any*/
}
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo />
            <PostsAreaContainer/>
        </div>
    )
}

export {
    Profile
}