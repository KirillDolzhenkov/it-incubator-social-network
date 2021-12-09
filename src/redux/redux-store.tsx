import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import {DialogsActionType, dialogsReducer} from "./dialogs-reducer";
import {ProfileActionType, profileReducer} from "./profile-reducer";
import {UsersActionType, usersReducer} from "./users-reducer";
import {authReducer, authReducerAT} from "./auth-reducer";

//types:
export type AppStateType = ReturnType<typeof rootReducer>;
export type AppActionType = UsersActionType | ProfileActionType | DialogsActionType | authReducerAT

//store & rootReducer:
export const rootReducer = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.__store__ = store

export {
    store
}