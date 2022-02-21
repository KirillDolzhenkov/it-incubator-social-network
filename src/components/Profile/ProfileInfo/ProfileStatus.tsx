import React from "react";

import styles from "./ProfileInfo.module.css"

//types:
type ProfileStatusPropsType = {
    status: string | null
    updateStatus: (status: string) => void
}
type LocalStateType = {
    editMode: boolean
    status: string | null
}

//class component:
class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    //localState for status:
    state: LocalStateType = {
        editMode: false,
        status: this.props.status,
    }

    //on&off edit mode of status:
    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.onUpdateStatus();
    }
    onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.deactivateEditMode();
        }
    }

    //onchange localState of status:
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value});
    }

    //update status callback  function from local state to global state:
    onUpdateStatus = () => {
        if (this.state.status){
            this.props.updateStatus( this.state.status);
        } else {
            this.props.updateStatus( ''); //NEED TO FIX !!!!
        }
    }

    //re-rendering of status's local state if its props have changed:
    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: any) { //need to check types!!!
        if (prevProps.status !== this.props.status){
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <>
                {
                    !this.state.editMode &&
                        <div>
                            <div className={styles.statusStaticMode} onDoubleClick={this.activateEditMode}>{
                                this.props.status
                                    ? this.props.status
                                    : "set status"
                            }</div>
                        </div>
                }

                {
                    this.state.editMode &&
                        <div className={`${styles.statusEditMode}`}>
                            <div>
                                <input
                                    autoFocus
                                    /*onBlur={this.deactivateEditMode}*/
                                    onKeyPress={this.onKeyPressHandler}
                                    value={`${this.state.status}`}  //NEED TO FIX !!!!
                                    onChange={this.onStatusChange}
                                />
                            </div>
                            <div>
                                <button
                                onClick={this.deactivateEditMode}
                                >save</button>
                            </div>
                        </div>
                }

            </>
        )
    }
}

export  {
    ProfileStatus
}