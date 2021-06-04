import React from "react";
import stylesModule from "./Profile.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    /*if (props.profile){
        return <Preloader />
    }*/

    return (
        <div>
            {/*{props.profile ? <Preloader/> : null}*/}
            <div>
                <img src="https://i.redd.it/om4a8r7glhx21.png"/>
            </div>
            <div className={stylesModule.descriptionBlock}>

                {/*<img src={props.profile && props.profile.photos ? props.profile.photos.large: ''}/>*/}
                <img src={props.profile?.photos.large}/>

                avatar+description
            </div>
        </div>
    )
}
