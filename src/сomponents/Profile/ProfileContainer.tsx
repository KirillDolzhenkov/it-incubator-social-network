import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

//types:
type mapStateToPropsType = {
    profile: any
    // need to fix
}

type mapDispatchToPropsType = {

}

type ProfileContainerPropsType =  mapStateToPropsType & mapDispatchToPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {

                /*this.props.setUserProfile(response.data);*/

            });
    }

    render(){
        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType  => {
    return{
        profile: state.profilePage
    }
}

export default connect (mapStateToProps, {

})(ProfileContainer);
