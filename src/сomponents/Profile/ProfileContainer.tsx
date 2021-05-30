import React from "react";
import {Profile} from "./Profile";


type ProfileContainerPropsType = {

}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    render(){
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

export {
    ProfileContainer
}