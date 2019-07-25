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
            <div className="welcome-screen-container d-flex justify-content-center align-items-center">
                {/* <SignInWrapper /> */}
                <Rules />
            </div>
        )
    }
}

export default WelcomeScreen