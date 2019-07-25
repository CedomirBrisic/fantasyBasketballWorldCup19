import React from 'react';
import SignInWrapper from './common/SignInWrapper';
import Rules from './common/Rules';


class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <h1 className="welcome-screen-container">
                Hello from WelcomeScreen Component
                <SignInWrapper />
                <Rules />
            </h1>
        )
    }
}

export default WelcomeScreen