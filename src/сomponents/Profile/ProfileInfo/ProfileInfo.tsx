import React from "react";
import styleModule from "./Profile.module.css";

type ProfileInfoPropsType = {}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    return (
        <div>
            <div>
                <img src="https://i.redd.it/om4a8r7glhx21.png"/>
            </div>
            <div className={styleModule.descriptionBlock}>
                <img src="https://sun9-28.userapi.com/impg/v3glpiZbVRdOgm9qekUGAWH49acEXoW7J91zJA/_3H54_kIlR0.jpg?size=807x807&quality=96&sign=f1f6e15bb3f0c8b9ff239c62665ba0bf&type=album"/>
                avatar+description
            </div>
        </div>
    )
}
