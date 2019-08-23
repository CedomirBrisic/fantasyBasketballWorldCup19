import React from 'react';
import Modal from 'react-bootstrap4-modal';
import { AppContext } from '../../screens/_context/AppContext';


class HallOfFameUserStatsModal extends React.Component {
    static contextType = AppContext;
    state = {

    }
    render() {
        console.log(this.props.userData)
        return (
            <Modal className="user-details-modal-container" visible={this.props.isShowing} onClickBackdrop={this.props.closeModal}>
                qweqwew
            </Modal>
        )
    }
}

export default HallOfFameUserStatsModal