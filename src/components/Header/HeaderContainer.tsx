import React from "react";
import {connect} from "react-redux";

import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Header} from "./Header";

/* import axios from "axios"; */


type mapStateToPropsType = {
    isAuth: boolean
    login: null | string
}

type mapDispatchToPropsType = {
    getAuthUserData: () => void;

    setAuthUserData: (data: any) => void //test
}
type HeaderClassContainerPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

class HeaderClassContainer extends React.Component<HeaderClassContainerPropsType> {
	componentDidMount() {
		this.props.getAuthUserData(); /*<-request*/

		/* axios
			.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
				withCredentials: true,
			})
			.then((response) => {
				if (response.data.resultCode === 0) {
					debugger;
					let data = response.data.data;
					this.props.setAuthUserData(data);
				}
			}); */
	}

	render() {
		return (
			<>
				<Header {...this.props} />
			</>
		);
	}
}

const HeaderContainer = connect<mapStateToPropsType,
    mapDispatchToPropsType, {},
    AppStateType>(mapStateToProps, {getAuthUserData,
    setAuthUserData//test
    })(HeaderClassContainer);

export {
    HeaderContainer
}