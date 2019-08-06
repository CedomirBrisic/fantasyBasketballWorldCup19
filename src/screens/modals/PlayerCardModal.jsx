import React from 'react';
import Modal from 'react-bootstrap4-modal';
import { AppContext } from '../../screens/_context/AppContext';
import calculateBasketballPlayerTDFantasyPoints from "../../services/calculateBasketballPlayerTDFantasyPoints";

class PlayerCardModal extends React.Component {
    static contextType = AppContext;
    state = {
        selectedDay: this.context.selectedDay,
        tdFantasyPoints: null
    }


    depositSelectedDay = (event) => {
        const selectedDay = event.target.getAttribute("data-selected-day")
        this.setState({
            selectedDay
        })
    }
    componentDidMount() {
        const tdFantasyPoints = calculateBasketballPlayerTDFantasyPoints(this.context.selectedPlayerForPlayerCardModal)
        this.setState({
            tdFantasyPoints
        })
    }
    render() {
        return (
            <Modal className="player-card-modal-container" visible={this.context.showPlayerCardModal} onClickBackdrop={this.context.closeSinglePlayerModal}>
                <div className="close" onClick={this.context.closeSinglePlayerModal}>&times;</div>
                <div className="player-general-info-container d-flex justify-content-between align-items-center">
                    <span><i>Player name:</i> {this.context.selectedPlayerForPlayerCardModal.name}</span>
                    <span><i>Team:</i> {this.context.selectedPlayerForPlayerCardModal.team}</span>
                </div>
                <div className="selected-day-info">Player stats for {this.state.selectedDay}</div>

                <div className="stats-tabs-container d-flex">
                    <div className="select-days-container d-flex flex-column justify-conten-around align-items-center">
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "31st-August" ? "is-selected" : ""}`} data-selected-day="31st-August" onClick={this.depositSelectedDay}>31st-August</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "1st-September" ? "is-selected" : ""}`} data-selected-day="1st-September" onClick={this.depositSelectedDay}>1st-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "2nd-September" ? "is-selected" : ""}`} data-selected-day="2nd-September" onClick={this.depositSelectedDay}>2nd-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "3rd-September" ? "is-selected" : ""}`} data-selected-day="3rd-September" onClick={this.depositSelectedDay}>3rd-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "4th-September" ? "is-selected" : ""}`} data-selected-day="4th-September" onClick={this.depositSelectedDay}>4th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "5th-September" ? "is-selected" : ""}`} data-selected-day="5th-September" onClick={this.depositSelectedDay}>5th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "6th-September" ? "is-selected" : ""}`} data-selected-day="6th-September" onClick={this.depositSelectedDay}>6th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "7th-September" ? "is-selected" : ""}`} data-selected-day="7th-September" onClick={this.depositSelectedDay}>7th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "8th-September" ? "is-selected" : ""}`} data-selected-day="8th-September" onClick={this.depositSelectedDay}>8th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "9th-September" ? "is-selected" : ""}`} data-selected-day="9th-September" onClick={this.depositSelectedDay}>9th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "10th-September" ? "is-selected" : ""}`} data-selected-day="10th-September" onClick={this.depositSelectedDay}>10th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "11th-September" ? "is-selected" : ""}`} data-selected-day="11th-September" onClick={this.depositSelectedDay}>11th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "12th-September" ? "is-selected" : ""}`} data-selected-day="12th-September" onClick={this.depositSelectedDay}>12th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "13th-September" ? "is-selected" : ""}`} data-selected-day="13th-September" onClick={this.depositSelectedDay}>13th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "14th-September" ? "is-selected" : ""}`} data-selected-day="14th-September" onClick={this.depositSelectedDay}>14th-September</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "15th-September" ? "is-selected" : ""}`} data-selected-day="15th-September" onClick={this.depositSelectedDay}>15th-September</button>
                    </div>

                    <div className="stats-container d-flex justify-content-between">
                        <div className="real-life-stats-list d-flex flex-column justify-content-between">
                            <div className="title"><i>Real life Stats</i></div>
                            <div className="single-item-wrapper d-flex justify-content-between">
                                <span className="label">
                                    Game win:
                                </span>
                                <span className="data">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].teamWin}
                                </span>
                            </div>
                            <div className="single-item-wrapper d-flex justify-content-between">
                                <span className="label">
                                    Assists:
                                </span>
                                <span className="data">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].assists}
                                </span>
                            </div>
                            <div className="single-item-wrapper d-flex justify-content-between">
                                <span className="label">
                                    Rebounds:
                                </span>
                                <span className="data">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].rebounds}
                                </span>
                            </div>
                            <div className="single-item-wrapper d-flex justify-content-between">
                                <span className="label">
                                    Steals:
                                </span>
                                <span className="data">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].steals}
                                </span>
                            </div>
                            <div className="single-item-wrapper d-flex justify-content-between">
                                <span className="label">
                                    Blocks:
                                </span>
                                <span className="data">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].blocks}
                                </span>
                            </div>
                            <div className="single-item-wrapper d-flex justify-content-between">
                                <span className="label">
                                    Turnovers:
                                </span>
                                <span className="data">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].turnovers}
                                </span>
                            </div>
                            <div className="single-item-wrapper d-flex justify-content-between">
                                <span className="label">
                                    Free throws:
                                </span>
                                <span className="data">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].freeThrowScored}/{this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].freeThrowAttempts}
                                </span>
                            </div>
                            <div className="single-item-wrapper d-flex justify-content-between">
                                <span className="label">
                                    Two points:
                                </span>
                                <span className="data">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].fieldGoalsScored}/{this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].fieldGoalsAttempts}
                                </span>
                            </div>
                            <div className="single-item-wrapper d-flex justify-content-between">
                                <span className="label">
                                    Three points:
                                </span>
                                <span className="data">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].threePointsScored}/{this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].threePointsAttempts}
                                </span>
                            </div>
                        </div>
                        {this.state.tdFantasyPoints !== null &&
                            <div className="calculated-td-fantasy-stats-list d-flex flex-column justify-content-between">
                                <div className="title"><i>TD-Fantasy points</i></div>
                                <div className="single-item-wrapper d-flex justify-content-between">
                                    <span className="label">
                                        Assists:
                                </span>
                                    <span className="data">
                                        {this.state.tdFantasyPoints.assists}
                                    </span>
                                </div>
                                <div className="summa-summarum-fantasy-points d-flex justify-content-between">
                                    <span className="label">
                                        Summa Summarum:
                                </span>
                                    <span className="data">
                                        12
                                </span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="bottom-container d-flex justify-content-between">
                    <div className="grand-total-wrapper d-flex justify-content-between align-items-center">
                        <div className="label">
                            Grand Total TD Fantasy points so far:
                            </div>
                        <div className="data">
                            XXX Valubale Points
                            </div>
                    </div>
                    <button type="button" className="btn btn-success">Include in your team for {this.context.selectedDay}</button>
                </div>

            </Modal>
        )
    }
}

export default PlayerCardModal