import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {AppStateType} from "../redux/redux-store";

//types:
type mapStateToPropsType = {
    isAuth: boolean
}

//container component:
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

function WithAuthRedirect<T>(Component: React.ComponentType<T>)  {

    const RedirectComponent = (props: mapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Redirect to={"/Login"}/>
        }
        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectedRedirectComponent;
}


export {
    WithAuthRedirect
}