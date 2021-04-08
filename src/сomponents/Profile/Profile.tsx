import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {PostsAreaContainer} from "./PostsArea/PostsAreaContainer";


type ProfilePropsType = {
    store: StoreType
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsAreaContainer
                store={props.store}
            />
        </div>
    );
}

