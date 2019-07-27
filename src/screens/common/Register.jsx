import React from 'react';
import postRegisterNewUser from '../../webhooks/postRegisterNewUser';


class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            email: ""
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
    depositEmail = (event) => {
        const email = event.target.value;
        this.setState({
            email
        })
    }
    sendRegistration = () => {
        const data = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        postRegisterNewUser(data);
    }

    render() {
        return (
            <section className="register-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">User Name</label>
                        <input value={this.state.username} onChange={this.depositUsername} type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" required />
                        <small id="usernameHelp" className="form-text text-muted">It's your username for this game. And it needs to be unique.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input value={this.state.password} onChange={this.depositPassword} type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Enter password" required />
                        <small id="passwordHelp" className="form-text text-muted">It's your password for this game. We suggest something like 12345
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput">Email address</label>
                        <input value={this.state.email} onChange={this.depositEmail} type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.<br />
                            We actually don't know why do we need it at all :-)
                        </small>
                    </div>
                    <button onClick={this.sendRegistration} type="submit" className="btn btn-outline-secondary">Submit</button>
                </form>
            </section>
        )
    }
}

export default Register