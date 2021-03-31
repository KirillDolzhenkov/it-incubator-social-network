import {ActionType, DialogsPageType, MessageType} from "./state";

const SEND_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "CHANGE-MESSAGE-TEXT"


const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    if (action.type === SEND_MESSAGE) {
        const newMessage: MessageType = {
            id: 3,
            message: action.newMessageText
        };
        state.message.push(newMessage)
        state.newMessageText = ""
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageText = action.newDialogText
    }
    return state;
}
export default dialogsReducer;
