import {ActionType, PostType, ProfilePageType} from "./state";

const SEND_POST = "ADD-POST"
const UPDATE_NEW_POST_BODY = "CHANGE-POST-TEXT"



const profileReducer = (state: ProfilePageType, action: ActionType) => {
    if (action.type === SEND_POST) {
        const newPost: PostType = {
            id: 3,
            message: action.newPostText,
            likesCount: 0
        };
        state.posts.unshift(newPost)
        state.newPostText = ""
    } else if (action.type === UPDATE_NEW_POST_BODY) {
        state.newPostText = action.newPostText
    }
    return state;
}

export default profileReducer;

