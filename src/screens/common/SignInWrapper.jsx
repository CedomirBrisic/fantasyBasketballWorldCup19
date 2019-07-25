import React from 'react';
import LogIn from './LogIn';
import Register from './Register';


class SignInWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <h1 className="sign-in-container">
                Hello from SignInWrapper Component
                <LogIn />
                <Register />
            </h1>
        )
    }
}

export default SignInWrapper