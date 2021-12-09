import {connect} from "react-redux";

import {ContentArea} from "./ContentArea";
import {AppStateType} from "../../../redux/redux-store";
import {addPost, ProfileInitialStateType, setNewPostText} from "../../../redux/profile-reducer";

//types:
type ContentAreaType = {}
type mapStateToPropsType = {
    profilePage: ProfileInitialStateType
}
type mapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    setNewPostText: (newText: string) => void
}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

//HOC:
const ContentAreaContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType,
    ContentAreaType,
    AppStateType>(mapStateToProps, {addPost, setNewPostText})(ContentArea);

export {
    ContentAreaContainer
}