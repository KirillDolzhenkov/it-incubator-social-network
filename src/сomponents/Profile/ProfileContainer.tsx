import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {Users} from "../Users/Users";

//types:
type mapStateToPropsType = {
    profile: ProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type ProfileContainerPropsType = mapStateToPropsType & mapDispatchToPropsType



class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data.items);
            });
    }

    render() {
        return(
            <div>
                {this.props.profile
                    ? <Preloader/>
                    : <Profile {...this.props} profile={this.props.profile}/>
                }
            </div>
        )
    }
}
const mapStateToProps = (state: AppStateType)  => {
    return{
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
