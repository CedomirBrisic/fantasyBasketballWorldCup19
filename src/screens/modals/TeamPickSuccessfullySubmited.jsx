import React from 'react';
import Modal from 'react-bootstrap4-modal';

class TeamPickSuccessfullySubmited extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Modal className="team-pick-modal-successfully-submited-container" visible={this.props.showTeamPickSuccessfullySubmited} onClickBackdrop={this.props.closeTeamPickSuccessfullySubmitedModal}>
                <div className="d-flex align-items-center message">
                    <h3>Good job!!! <br/>
                    Your selection is successfully submitted</h3>
                    <div className="check-mark-wrapper" onClick={this.props.closeTeamPickSuccessfullySubmitedModal}>
                        &#10004;
                    </div>
                </div>
            </Modal>
        )
    }
}

export default TeamPickSuccessfullySubmited