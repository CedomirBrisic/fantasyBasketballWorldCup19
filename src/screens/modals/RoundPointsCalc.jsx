import React from 'react';
import Modal from 'react-bootstrap4-modal';

class RoundPointsCalc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Modal visible={this.props.showRoundPointsCalc} onClickBackdrop={this.props.closeRoundPointsCalcModal}>
                <h1>Hello from round points calc</h1>
            </Modal>
        )
    }
}

export default RoundPointsCalc