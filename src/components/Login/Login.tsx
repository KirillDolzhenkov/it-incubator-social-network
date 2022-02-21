import React from "react";

//types:
type LoginFormPropsType = {}
type LoginPagePropsType = {}

//functional component:
const LoginForm: React.FC<LoginFormPropsType> = (props) => {
    return(
        <form>
            <div>
                <input placeholder={"Login"}/>
            </div>
            <div>
                <input placeholder={"Password"}/>
            </div>

            <div>
                <input type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

//functional component:
const LoginPage: React.FC<LoginPagePropsType> = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}

export {
    LoginPage
}