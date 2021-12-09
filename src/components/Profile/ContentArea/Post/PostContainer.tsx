import {Dispatch} from "redux";
import {connect} from "react-redux";

import {AppStateType} from "../../../../redux/redux-store";
import {addLike, ProfileInitialStateType, removeLike} from "../../../../redux/profile-reducer";
import {Post} from "./Post";

//types:
type mapStateToPropsType = {
    profilePage: ProfileInitialStateType
}
type mapDispatchToPropsType = {
    addLike: (id: number, isLiked: boolean) => void
    removeLike: (id: number, isLiked: boolean) => void
}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addLike: (id: number, isLiked: boolean)=>{
            dispatch(addLike(id, isLiked));
        },
        removeLike: (id: number, isLiked: boolean)=> {
            dispatch(removeLike(id, isLiked));
        }
    }
}

//HOC:
const PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post);

export {
    PostContainer
}