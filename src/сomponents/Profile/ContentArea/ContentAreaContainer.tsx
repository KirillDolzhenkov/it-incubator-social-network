import {ContentArea} from "./ContentArea";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {addPostAC, changePostAC, ProfilePageType} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";

//types:
type  mapStateToPropsType = {
    profilePage: ProfilePageType
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType =>{
    return {
        profilePage: state.profilePage
    }
}
type mapDispatchToPropsType = {
    updateNewPostText: (text: string)=> void
    addPost: (text: string)=> void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType =>{
    return {
        updateNewPostText: (text: string)=>{
            dispatch(changePostAC(text))
        },
        addPost: (text: string)=>{
            dispatch(addPostAC(text))
        },
    }
}

const ContentAreaContainer = connect(mapStateToProps, mapDispatchToProps)(ContentArea);

export {
    ContentAreaContainer
}
