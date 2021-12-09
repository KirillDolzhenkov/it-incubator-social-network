import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";

import {
    addMessage,
    DialogsInitialStateType,
    setNewMessageText
} from "../../redux/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";

//types:
type mapStateToPropsType = {
    dialogsPage: DialogsInitialStateType
    isAuth: boolean //delete?
}
type mapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
    setNewMessageText: (newText: string) => void
}
type DialogsClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

//class container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogPage,
        isAuth: state.auth.isAuth //delete?
    }
}
class DialogsClassContainer extends React.Component<DialogsClassContainerPropsType> {
    render(){
        return(
            <Dialogs {...this.props}/>
        )
    }
}

//HOC:
const DialogsContainer = compose<React.FC>(
    connect<mapStateToPropsType, mapDispatchToPropsType,
        {}, AppStateType>(mapStateToProps, {addMessage,setNewMessageText}),
)(DialogsClassContainer);

export {
    DialogsContainer
}


