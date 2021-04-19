import {ActionType} from "./store";

export type SidebarPageType = {}

const initialState = {}

const sidebarReducer = (state: SidebarPageType = initialState, action: ActionType): SidebarPageType => {
    return state;
}

export {
    sidebarReducer
}