import React from "react";

import defaultSmallUserPhoto from "../../../assets/images/defaultSmallUserPhoto.png";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfilePageType } from "../../../redux/profile-reducer";
import styles from "./ProfileInfo.module.css";
import preloaderStyle from "../../common/Preloader/Preloader.module.css";
import {ProfileStatus} from "./ProfileStatus";

//types:
type  ProfileInfoPropsType = {
    profile: ProfilePageType | null
    status: string | null
    updateStatus: (status: string) => void
}

//functional component:
const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {

    const state = props.profile;

    if (!state) {
        return (
            <>
                <div className={preloaderStyle.main}>
                    <Preloader/>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={
                    state.photos.large !== null
                        ? state.photos.large
                        : defaultSmallUserPhoto //defaultAsset
                }/>
                <div className={styles.items}>
                    <div><b>{state.fullName}</b></div>
                    <ProfileStatus
                        updateStatus={props.updateStatus}
                        status={props.status}
                    />
                </div>
            </div>
        </div>
    )
}

export {
    ProfileInfo
}