import React from "react";
import stylesModule from "./Profile.module.css";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profile: any
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile){
        return <Preloader isFetching={true}/>
    }
    return (
        <div>
            <div>
                <img src="https://i.redd.it/om4a8r7glhx21.png"/>
            </div>
            <div className={stylesModule.descriptionBlock}>
                <img src={props.profile && props.profile.photos ? props.profile.photos.large: ''}/>
                {//<img src="https://sun9-28.userapi.com/impg/v3glpiZbVRdOgm9qekUGAWH49acEXoW7J91zJA/_3H54_kIlR0.jpg?size=807x807&quality=96&sign=f1f6e15bb3f0c8b9ff239c62665ba0bf&type=album"/>
                }
                {/*<img src={props.profile.photos.large}/>*/}

                avatar+description
            </div>
        </div>
    )
}
