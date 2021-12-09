import React from "react";
import {connect} from "react-redux";

import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";
import { Header } from "./Header";

//types:
type HeaderContainerPropsType = {}
type mapStateToPropsType = {
    isAuth: boolean
    login: null | string
}
type mapDispatchToPropsType = {
    getAuthUserData: () => void;
}
type HeaderClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

//class container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

class HeaderClassContainer extends React.Component<HeaderClassContainerPropsType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <>
            <Header {...this.props}/>
        </>
    }
}

//HOC
const HeaderContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType,
    HeaderContainerPropsType,
    AppStateType>(mapStateToProps, {getAuthUserData})(HeaderClassContainer);

export {
    HeaderContainer
}