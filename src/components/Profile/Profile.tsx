import React from "react";

import styles from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContentAreaContainer} from "./ContentArea/ContentAreaContainer";
import {ProfilePageType} from "../../redux/profile-reducer";

//types:
type ProfilePropsType = {
    profile: ProfilePageType | null
}

//functional component:
const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={styles.profile}>
            <ProfileInfo profile={props.profile}/>
            <ContentAreaContainer/>
        </div>
    )
}

export
{
    Profile
}