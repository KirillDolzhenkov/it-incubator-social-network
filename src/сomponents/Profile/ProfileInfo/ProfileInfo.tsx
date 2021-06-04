import React from "react";
import stylesModule from "./Profile.module.css";
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {

}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    /*if (!props.profile){
        return <Preloader isFetching/>
    }*/
    return (
        <div>
            <div>
                <img src="https://i.redd.it/om4a8r7glhx21.png"/>
            </div>
            <div className={stylesModule.descriptionBlock}>
                {/*<img src={props.profile && props.profile.photos ? props.profile.photos.large: ''}/>*/}

                {/*<img src={props.profile.photos.large}/>*/}

                avatar+description
            </div>
        </div>
    )
}
