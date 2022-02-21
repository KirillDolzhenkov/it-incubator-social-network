import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { AppStateType } from "../redux/redux-store";

//types:
type mapStateToPropsType = {
  isAuth: boolean;
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  }
}


//container component:
function WithAuthRedirect<T>(Component: React.ComponentType<T>) { //possible to make arrow function?

  const RedirectComponent = (props: mapStateToPropsType) => {

    const {isAuth, ...restProps} = props
    if (!isAuth) {
      return <Redirect to={"/Login"}/>
    }

    return <Component {...(restProps as T)} />
  }

  return connect(mapStateToProps)(RedirectComponent)
}

export {
  WithAuthRedirect
}
