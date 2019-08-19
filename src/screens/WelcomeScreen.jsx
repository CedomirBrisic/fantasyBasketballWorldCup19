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
            <div className="w-100 welcome-screen-container d-flex flex-column justify-content-between">
                <h1>
                    TD Fantasy - Virtual basketball manager game - World Cup 2019 edition
                </h1>
                <div className="d-flex h-100 justify-content-between">
                    <SignInWrapper />
                    <Rules />
                </div>
            </div>
        )
    }
}

export default WelcomeScreen