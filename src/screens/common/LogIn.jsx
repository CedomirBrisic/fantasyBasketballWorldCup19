import React from 'react';
import { AppContext } from '../../screens/_context/AppContext';
import { Redirect } from 'react-router-dom'
import putCheckUsernameAndPassword from "../../webhooks/putCheckUsernameAndPassword";



class LogIn extends React.Component {
    static contextType = AppContext;
    state = {
        username: "",
        password: "",
        badUsernameOrPassword: false,
        goToUserScreen: "",
        askForFullScreen: false,
        respond: null
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

    proceedToFullUserScreen = () => {
        const userData = this.state.respond
        this.context.depositUserKey(userData[0].username, this.state.password)
        this.setState({
            goToUserScreen: "nekAReNDOMSifraOdBAsdostAkarakTERA",
            askForFullScreen: false
        })
        this.context.openFullScreen()
    }
    proceedToUserScreen = () => {
        const userData = this.state.respond
        this.context.depositUserKey(userData[0].username, this.state.password)
        this.setState({
            goToUserScreen: "nekAReNDOMSifraOdBAsdostAkarakTERA",
            askForFullScreen: false
        })
    }
    proceedToFullScreenAsk = () => {
        this.setState({
            askForFullScreen: true
        })
    }
    sendLogIn = () => {
        let data = {}
        if (this.state.username !== "" || this.state.password !== "") {
            data = {
                username: this.state.username,
                password: this.state.password
            }
        } else {
            data = {
                username: this.props.username,
                password: this.props.password
            }
        }
        putCheckUsernameAndPassword(data, "nekArendomSifrAOdDostaKArakTerA123").then((response) => {

            if (response.length === 0) {
                this.setState({
                    badUsernameOrPassword: true
                })
            } else {
                this.setState({
                    badUsernameOrPassword: false,
                    respond: response
                })
                this.proceedToFullScreenAsk()
            }
        })
    }
    checkIsEnter = (event) => {
        if (event.keyCode === 13) {
            this.sendLogIn()
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.successfullyRegistered && prevProps.username !== this.props.username && prevProps.password !== this.props.password) {
            this.setState({
                username: this.props.username,
                password: this.props.password
            })
            setTimeout(function () {
                this.sendLogIn()
            }.bind(this)
                , 2400);
        }
    }
    render() {
        if (this.state.goToUserScreen === "nekAReNDOMSifraOdBAsdostAkarakTERA") {
            return <Redirect to='/user-screen' />
        }
        return (
            // Forgot your username or password?
            <>
                {!this.state.askForFullScreen &&
                    <section className="log-in-container">
                        <div>{this.successfullyRegisteredMessage()}</div>
                        <div className={`${this.state.badUsernameOrPassword ? "red-letters" : ""}`}>{this.state.badUsernameOrPassword ? "It's not your username or it's not your password. Try to remember it." : ""}</div>
                        <div className="form-group">
                            <input value={this.state.username} onChange={this.depositUsername} type="text" className="form-control" id="usernameLogin" aria-describedby="usernameHelp" placeholder="Your username" required />
                        </div>
                        <div className="form-group">
                            <input value={this.state.password} onChange={this.depositPassword} onKeyDown={this.checkIsEnter} type="password" className="form-control" id="passwordLogin" aria-describedby="passwordHelp" placeholder="Your password" required />
                        </div>
                        <h6 className={`${this.state.badUsernameOrPassword ? "d-block" : "d-none"}`}>
                            If you forgot your user name or password, send us an email and we'll help... We are good guys :-) <br />
                            But you need to send it from email address you used for registration <br />
                        </h6>
                        <button onClick={this.sendLogIn} type="submit" className="w-100 btn btn-outline-secondary">Log In</button>
                    </section>
                }
                {this.state.askForFullScreen && !this.context.isSafari &&
                    <div className="ask-for-fullscreen-container d-flex align-items-center">
                        <div className="ask-for-fullscreen-wrapper d-flex flex-column justify-content-around align-items-center">
                            <h1>We suggest you to enable Fullscreen mode</h1>
                            <div className="buttons-container d-flex justify-content-around">
                                <button type="button" className="btn btn-outline-warning" onClick={this.proceedToUserScreen}>I'm good... Maybe I'll enable it later</button>
                                <button type="button" className="btn btn-outline-success" onClick={this.proceedToFullUserScreen}>Yes please !</button>
                            </div>
                            <h5>At top left corner you'll see button for switching fullscreen ON/OFF anyway</h5>
                        </div>
                    </div>
                }
                {this.context.isSafari && this.state.respond !== null &&
                    this.proceedToUserScreen()
                }
            </>
        )
    }
}

export default LogIn