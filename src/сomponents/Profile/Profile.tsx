import React from "react";
import {ContentAreaContainer} from "./ContentArea/ContentAreaContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, ProfileType} from "../../redux/profile-reducer";


type ProfilePropsType = {
    profile: ProfileType | null
}
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <ContentAreaContainer/>
        </div>
    )
}

export {
    Profile
}