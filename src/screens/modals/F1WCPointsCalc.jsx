import React from 'react';
import Modal from 'react-bootstrap4-modal';

class F1WCPointsCalc extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <Modal visible={this.props.showF1WCPointsCalc} onClickBackdrop={this.props.closeF1WCPointsCalcModal}>
                <h1>Hello from F1WC points calc</h1>
            </Modal>
        )
    }
}

export default F1WCPointsCalc