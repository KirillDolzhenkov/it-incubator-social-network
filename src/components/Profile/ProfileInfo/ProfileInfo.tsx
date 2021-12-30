import React from "react";

import defaultSmallUserPhoto from "../../../assets/images/defaultSmallUserPhoto.png";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfilePageType } from "../../../redux/profile-reducer";
import styles from "./ProfileInfo.module.css";

//types:
type  ProfileInfoPropsType = {
    profile: ProfilePageType | null
}

//functional component:
const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    const state = props.profile; //!!!

    if (!state) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={
                    state.photos.large !== null
                        ? state.photos.large
                        : defaultSmallUserPhoto //defaultAsset
                }/>
                <div>
                    <div><b>{state.fullName}</b></div>
                    <div>{state.aboutMe}</div>
                </div>
            </div>
        </div>
    )
}

export {
    ProfileInfo
}