import React from 'react';
import putCheckUsernameAndPassword from "../../webhooks/putCheckUsernameAndPassword";



class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            badUsernameOrPassword: false
        }
    }

    successfullyRegisteredMessage = () => {
        if (this.props.successfullyRegistered) {
            const output =
                <div className="d-flex align-items-center">
                    <h3>Good job!!! Successfully registered</h3>
                    <div className="check-mark-wrapper">
                        &#10004;
                    </div>
                </div>
            return output
        }
    }

    depositUsername = (event) => {
        const username = event.target.value;
        this.setState({
            username
        })
    }
    depositPassword = (event) => {
        const password = event.target.value;
        this.setState({
            password
        })
    }

    sendLogIn = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        putCheckUsernameAndPassword(data, "nekArendomSifrAOdDostaKArakTerA123").then((response) => {
            console.log(response)
            if (response.length === 0){
                this.setState({
                    badUsernameOrPassword: true
                })
            } else {
                this.setState({
                    badUsernameOrPassword: false
                })
            }
        })
    }
    render() {
        return (
            // Forgot your username or password?
            <section className="log-in-container">
                <div>{this.successfullyRegisteredMessage()}</div>
                <div className={`${this.state.badUsernameOrPassword ? "red-letters" : ""}`}>{this.state.badUsernameOrPassword ? "It's not your username or it's not your password. Try to remember it." : ""}</div>
                <div className="form-group">
                    <input value={this.state.username} onChange={this.depositUsername} type="text" className="form-control" id="usernameLogin" aria-describedby="usernameHelp" placeholder="Your username" required />
                </div>
                <div className="form-group">
                    <input value={this.state.password} onChange={this.depositPassword} type="password" className="form-control" id="passwordLogin" aria-describedby="passwordHelp" placeholder="Your password" required />
                </div>
                <h6 className={`${this.state.badUsernameOrPassword ? "d-block" : "d-none"}`}>
                    If you forgot your user name or password, send us an email and we'll help... We are good guys :-) <br/>
                    But you need to send it from email address you used during registration <br/>
                </h6>
                <button onClick={this.sendLogIn} type="submit" className="w-100 btn btn-outline-secondary">Log In</button>
            </section>
        )
    }
}

export default LogIn