import React from "react";
import {ContentAreaContainer} from "./ContentArea/ContentAreaContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";


type ProfilePropsType = {
    profile: ProfileType | null
}
const Profile: React.FC<ProfilePropsType> = (props) => {
    /*    if (props.profile){
            return <Preloader />
        }*/
    return (

        <div>
            {/*{!props.profile ? <Preloader/> :
                <div>
                    <ProfileInfo profile={props.profile}/>
                    <ContentAreaContainer/>
                </div>
            }*/}
            <ProfileInfo profile={props.profile}/>
            <ContentAreaContainer/>
        </div>
    )
}

export
{
    Profile
}