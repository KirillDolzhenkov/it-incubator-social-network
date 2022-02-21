import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, ProfilePageType, updateUserStatus} from "../../redux/profile-reducer";
import {Profile} from "./Profile";

//types:
type mapStateToPropsType = {
    profile: ProfilePageType | null
    status: string | null
}
type mapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}
type  PathParamsType = {
    userId: string //number or string (STRING!!!)
}
type ProfileClassContainerPropsType = mapStateToPropsType
    & mapDispatchToPropsType
    & RouteComponentProps<PathParamsType> //.props.match.params FIX



const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

//class container component:
class ProfileClassContainer extends React.Component<ProfileClassContainerPropsType> {

    componentDidMount() {

        //profile userId:
        let userId: string = this.props.match.params.userId;
        if (!userId) {
            userId = "8091"; // test value!!!!
        }

        //usersAPI.getProfile() & profileAPI.getUserStatus() requests, ("+" for to string):
        this.props.getUserProfile(+userId);
        this.props.getUserStatus(+userId);
    }

    render() {
        return (
            <>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateUserStatus}
                />
            </>
        )
    }
}

//HOC:
const ProfileContainer = compose<React.FC>(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(
        mapStateToProps, {
            getUserProfile,
            getUserStatus,
            updateUserStatus,
        }
    ),
    withRouter,
)(ProfileClassContainer);

export {
    ProfileContainer
}

