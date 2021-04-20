import {Dialogs} from "./Dialogs";
import {addMessageAC, changeMessageAC, DialogsPageInitialStateType} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Dispatch } from "redux";


/*type DialogsContainerPropsType = {
    store: StoreType
}*/

/*
const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage;

                const addMessage = (text: string) => {
                   store.dispatch(addMessageAC(text))
                }
                const onMessageChange = (text: string) => {
                    store.dispatch(changeMessageAC(text))
                }
                return (
                    <div>
                        <Dialogs
                            updateNewMessageText={onMessageChange}
                            addMessage={addMessage}
                            message={state.message}
                            newMessageText={state.newMessageText}
                            dialog={state.dialog}
                        />
                    </div>
                )
            }}
        </StoreContext.Consumer>

    )
}*/

type mapStateToPropsType = {
    dialogsPage: DialogsPageInitialStateType
}
type mapDispatchToPropsType = {
    updateNewMessageText: (text: string)=> void
    addMessage: (text: string)=> void
}

const mapStateToProps =(state: AppStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps =(dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewMessageText: (text: string) =>{
            dispatch(changeMessageAC(text))
        },
        addMessage: (text: string) =>{
            dispatch(addMessageAC(text))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export {
    DialogsContainer
}