import React from "react";
import { PostsAreaContainer } from "./PostsArea/PostsAreaContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



type ProfilePropsType = {
    /*store: StoreType*/
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsAreaContainer/>
        </div>
    )
}

