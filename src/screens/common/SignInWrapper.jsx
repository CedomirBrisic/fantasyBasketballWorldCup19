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
            <section className="sign-in-container d-flex align-items-center">

                <div className="nav-wrapper d-flex">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active btn-outline-dark" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">LogIn</a>
                        <a className="nav-link btn-outline-dark" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Register</a>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><LogIn /></div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><Register /></div>
                    </div>
                </div>




            </section>
        )
    }
}

export default SignInWrapper