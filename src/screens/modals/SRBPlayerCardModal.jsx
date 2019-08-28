import React from 'react';
import Modal from 'react-bootstrap4-modal';
import { AppContext } from '../../screens/_context/AppContext';
import serbischeDatum from "../../services/serbischeDatum";
import serbischeNazivTima from "../../services/serbischeNazivTima";
import calculateBasketballPlayerTDFantasyPoints from "../../services/calculateBasketballPlayerTDFantasyPoints";
import calculateBasketballPlayerTDFantasyGrandTotalPoints from "../../services/calculateBasketballPlayerTDFantasyGrandTotalPoints";

class SRBPlayerCardModal extends React.Component {
    static contextType = AppContext;
    state = {
        selectedDay: this.context.selectedDay,
        tdFantasyPoints: null,
        hoveredElement: ""
    }


    depositSelectedDay = (event) => {
        const selectedDay = event.target.getAttribute("data-selected-day")
        this.setState({
            selectedDay
        })
        this.depositTdFantasyPoints(this.context.selectedPlayerForPlayerCardModal, selectedDay)
    }

    depositTdFantasyPoints = (playerData, selectedDay) => {
        const tdFantasyPoints = calculateBasketballPlayerTDFantasyPoints(playerData, selectedDay)
        this.setState({
            tdFantasyPoints
        })
    }
    depositHoveredElement = (event) => {
        const hoveredElement = event.target.getAttribute("data-stats-element")
        this.setState({
            hoveredElement
        })
    }
    removeHoveredElement = () => {
        this.setState({
            hoveredElement: ""
        })
    }
    pickThisPlayerForTeam = (event) => {
        const pickedPlayerId = event.target.getAttribute("data-picked-player-id")
        this.context.pickPlayerForTeam(this.context.choosePlayerPosition, pickedPlayerId)
    }

    componentDidMount() {
        this.depositTdFantasyPoints(this.context.selectedPlayerForPlayerCardModal, this.state.selectedDay)
    }

    render() {
        return (
            <Modal className="player-card-modal-container" visible={this.context.showPlayerCardModal} onClickBackdrop={this.context.closeSinglePlayerModal}>
                <div className="close" onClick={this.context.closeSinglePlayerModal}>&times;</div>
                <div className="player-general-info-container d-flex justify-content-between align-items-center">
                    <span><i>Košarkaš:</i> {this.context.selectedPlayerForPlayerCardModal.name}</span>
                    <span><i>Ekipa:</i> {serbischeNazivTima(this.context.selectedPlayerForPlayerCardModal.team)}</span>
                </div>
                <div className="selected-day-info">Statistika za {serbischeDatum(this.state.selectedDay)}</div>

                <div className="stats-tabs-container d-flex">
                    <div className="select-days-container d-flex flex-column justify-conten-around align-items-center">
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "31st-August" ? "is-selected" : ""}`} data-selected-day="31st-August" onClick={this.depositSelectedDay}>31. Avgust</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "1st-September" ? "is-selected" : ""}`} data-selected-day="1st-September" onClick={this.depositSelectedDay}>1. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "2nd-September" ? "is-selected" : ""}`} data-selected-day="2nd-September" onClick={this.depositSelectedDay}>2. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "3rd-September" ? "is-selected" : ""}`} data-selected-day="3rd-September" onClick={this.depositSelectedDay}>3. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "4th-September" ? "is-selected" : ""}`} data-selected-day="4th-September" onClick={this.depositSelectedDay}>4. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "5th-September" ? "is-selected" : ""}`} data-selected-day="5th-September" onClick={this.depositSelectedDay}>5. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "6th-September" ? "is-selected" : ""}`} data-selected-day="6th-September" onClick={this.depositSelectedDay}>6. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "7th-September" ? "is-selected" : ""}`} data-selected-day="7th-September" onClick={this.depositSelectedDay}>7. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "8th-September" ? "is-selected" : ""}`} data-selected-day="8th-September" onClick={this.depositSelectedDay}>8. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "9th-September" ? "is-selected" : ""}`} data-selected-day="9th-September" onClick={this.depositSelectedDay}>9. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "10th-September" ? "is-selected" : ""}`} data-selected-day="10th-September" onClick={this.depositSelectedDay}>10. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "11th-September" ? "is-selected" : ""}`} data-selected-day="11th-September" onClick={this.depositSelectedDay}>11. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "12th-September" ? "is-selected" : ""}`} data-selected-day="12th-September" onClick={this.depositSelectedDay}>12. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "13th-September" ? "is-selected" : ""}`} data-selected-day="13th-September" onClick={this.depositSelectedDay}>13. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "14th-September" ? "is-selected" : ""}`} data-selected-day="14th-September" onClick={this.depositSelectedDay}>14. Septembar</button>
                        <button type="button" className={`btn btn-outline-dark ${this.state.selectedDay === "15th-September" ? "is-selected" : ""}`} data-selected-day="15th-September" onClick={this.depositSelectedDay}>15. Septembar</button>
                    </div>

                    <div className="stats-container d-flex justify-content-between">
                        <div className="real-life-stats-list d-flex flex-column justify-content-between">
                            <div className="title"><i>Statistika u stvarnosti</i></div>
                            <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "game-win-wrapper" ? "isHovered" : ""}`} data-stats-element="game-win-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                <span className="label" data-stats-element="game-win-wrapper">
                                    Pobeda:
                                </span>
                                <span className="data" data-stats-element="game-win-wrapper">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].teamWin}
                                </span>
                            </div>
                            <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "assists-wrapper" ? "isHovered" : ""}`} data-stats-element="assists-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                <span className="label" data-stats-element="assists-wrapper">
                                    Asistencije:
                                </span>
                                <span className="data" data-stats-element="assists-wrapper">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].assists}
                                </span>
                            </div>
                            <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "rebounds-wrapper" ? "isHovered" : ""}`} data-stats-element="rebounds-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                <span className="label" data-stats-element="rebounds-wrapper">
                                    Skokovi:
                                </span>
                                <span className="data" data-stats-element="rebounds-wrapper">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].rebounds}
                                </span>
                            </div>
                            <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "blocks-wrapper" ? "isHovered" : ""}`} data-stats-element="blocks-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                <span className="label" data-stats-element="blocks-wrapper">
                                    Blokade:
                                </span>
                                <span className="data" data-stats-element="blocks-wrapper">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].blocks}
                                </span>
                            </div>
                            <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "steals-wrapper" ? "isHovered" : ""}`} data-stats-element="steals-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                <span className="label" data-stats-element="steals-wrapper">
                                    Ukradene lopte:
                                </span>
                                <span className="data" data-stats-element="steals-wrapper">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].steals}
                                </span>
                            </div>
                            <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "turnovers-wrapper" ? "isHovered" : ""}`} data-stats-element="turnovers-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                <span className="label" data-stats-element="turnovers-wrapper">
                                    Izgubljene lopte:
                                </span>
                                <span className="data" data-stats-element="turnovers-wrapper">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].turnovers}
                                </span>
                            </div>
                            <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "free-throws-wrapper" ? "isHovered" : ""}`} data-stats-element="free-throws-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                <span className="label" data-stats-element="free-throws-wrapper">
                                    Slobodna bacanja:
                                </span>
                                <span className="data" data-stats-element="free-throws-wrapper">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].freeThrowScored}/{this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].freeThrowAttempts}
                                </span>
                            </div>
                            <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "two-points-wrapper" ? "isHovered" : ""}`} data-stats-element="two-points-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                <span className="label" data-stats-element="two-points-wrapper">
                                    Za dva poena:
                                </span>
                                <span className="data" data-stats-element="two-points-wrapper">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].fieldGoalsScored}/{this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].fieldGoalsAttempts}
                                </span>
                            </div>
                            <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "three-points-wrapper" ? "isHovered" : ""}`} data-stats-element="three-points-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                <span className="label" data-stats-element="three-points-wrapper">
                                    Za tri poena:
                                </span>
                                <span className="data" data-stats-element="three-points-wrapper">
                                    {this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].threePointsScored}/{this.context.selectedPlayerForPlayerCardModal[this.state.selectedDay].threePointsAttempts}
                                </span>
                            </div>
                        </div>





                        {/*--------------------------------------- FANTASY POINTS --------------------- */}
                        {this.state.tdFantasyPoints !== null &&
                            <div className="calculated-td-fantasy-stats-list d-flex flex-column justify-content-between">
                                <div className="title"><i>Sportske Fantazi poeni</i></div>
                                <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "game-win-wrapper" ? "isHovered" : ""}`} data-stats-element="game-win-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                    <span className="label" data-stats-element="game-win-wrapper">
                                        Pobeda:
                                </span>
                                    <span className="data" data-stats-element="game-win-wrapper">
                                        {this.state.tdFantasyPoints.gameWin}
                                    </span>
                                </div>
                                <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "assists-wrapper" ? "isHovered" : ""}`} data-stats-element="assists-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                    <span className="label" data-stats-element="assists-wrapper">
                                        Asistencije:
                                </span>
                                    <span className="data" data-stats-element="assists-wrapper">
                                        {this.state.tdFantasyPoints.assists}
                                    </span>
                                </div>
                                <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "rebounds-wrapper" ? "isHovered" : ""}`} data-stats-element="rebounds-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                    <span className="label" data-stats-element="rebounds-wrapper">
                                        Skokovi:
                                </span>
                                    <span className="data" data-stats-element="rebounds-wrapper">
                                        {this.state.tdFantasyPoints.rebounds}
                                    </span>
                                </div>
                                <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "blocks-wrapper" ? "isHovered" : ""}`} data-stats-element="blocks-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                    <span className="label" data-stats-element="blocks-wrapper">
                                        Blokade:
                                </span>
                                    <span className="data" data-stats-element="blocks-wrapper">
                                        {this.state.tdFantasyPoints.blocks}
                                    </span>
                                </div>
                                <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "steals-wrapper" ? "isHovered" : ""}`} data-stats-element="steals-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                    <span className="label" data-stats-element="steals-wrapper">
                                        Ukradene lopte:
                                </span>
                                    <span className="data" data-stats-element="steals-wrapper">
                                        {this.state.tdFantasyPoints.steals}
                                    </span>
                                </div>
                                <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "turnovers-wrapper" ? "isHovered" : ""}`} data-stats-element="turnovers-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement}>
                                    <span className="label" data-stats-element="turnovers-wrapper">
                                        Izgubljene lopte:
                                </span>
                                    <span className={`data ${this.state.tdFantasyPoints.turnovers < 0 ? "text-danger" : ""}`} data-stats-element="turnovers-wrapper">
                                        {this.state.tdFantasyPoints.turnovers}
                                    </span>
                                </div>


                                <div>
                                    <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "free-throws-wrapper" ? "isHovered" : ""}`} data-stats-element="free-throws-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement} data-toggle="tooltip" data-placement="top" title=" All free throw shots scored by player are multiplied by free throws shot percentage">
                                        <span className="label" data-stats-element="free-throws-wrapper">
                                            Slobodna bacanja:
                                        </span>
                                        <span className="data" data-stats-element="free-throws-wrapper">
                                            {this.state.tdFantasyPoints.freeThrowsPoints}
                                        </span>
                                    </div>
                                    <div className={`single-item-bonus-wrapper d-flex justify-content-between ${this.state.hoveredElement === "free-throws-wrapper" ? "isHovered" : ""}`} data-stats-element="free-throws-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement} data-toggle="tooltip" data-placement="top" title="When player shoots free throws without miss (but 3 or more shots !!!) he is rewarded with bonus - 25%">
                                        <span className="label" data-stats-element="free-throws-wrapper">
                                            Slobodna bacanja - bonusi:
                                        </span>
                                        <span className={`data ${this.state.tdFantasyPoints.freeThrowsPointsBonus > 0 ? "text-success" : ""}`} data-stats-element="free-throws-wrapper">
                                            {this.state.tdFantasyPoints.freeThrowsPointsBonus}
                                        </span>
                                    </div>
                                    <div className={`single-item-penalty-wrapper d-flex justify-content-between ${this.state.hoveredElement === "free-throws-wrapper" ? "isHovered" : ""}`} data-stats-element="free-throws-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement} data-toggle="tooltip" data-placement="top" title="When player shoots free throws without scoring (but 3 or more shots !!!) he is penalized with negative points (first three misses are -1pt and every next miss is -1pt)">
                                        <span className="label" data-stats-element="free-throws-wrapper">
                                            Slobodna bacanja - penali:
                                        </span>
                                        <span className={`data ${this.state.tdFantasyPoints.freeThrowsPointsPenalty < 0 ? "text-danger" : ""}`} data-stats-element="free-throws-wrapper">
                                            {this.state.tdFantasyPoints.freeThrowsPointsPenalty}
                                        </span>
                                    </div>
                                </div>



                                <div>
                                    <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "two-points-wrapper" ? "isHovered" : ""}`} data-stats-element="two-points-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement} data-toggle="tooltip" data-placement="top" title="All two point shots scored by player are multiplied by two points shot percentage">
                                        <span className="label" data-stats-element="two-points-wrapper">
                                            Za dva poena:
                                    </span>
                                        <span className="data" data-stats-element="two-points-wrapper">
                                            {this.state.tdFantasyPoints.twoPoints}
                                        </span>
                                    </div>
                                    <div className={`single-item-bonus-wrapper d-flex justify-content-between ${this.state.hoveredElement === "two-points-wrapper" ? "isHovered" : ""}`} data-stats-element="two-points-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement} data-toggle="tooltip" data-placement="top" title="When player shoots two point shots without miss (but 3 or more shots !!!) he is rewarded with bonus - 50%">
                                        <span className="label" data-stats-element="two-points-wrapper">
                                            Za dva poena - bonusi:
                                    </span>
                                        <span className={`data ${this.state.tdFantasyPoints.twoPointsBonus > 0 ? "text-success" : ""}`} data-stats-element="two-points-wrapper">
                                            {this.state.tdFantasyPoints.twoPointsBonus}
                                        </span>
                                    </div>
                                    <div className={`single-item-penalty-wrapper d-flex justify-content-between ${this.state.hoveredElement === "two-points-wrapper" ? "isHovered" : ""}`} data-stats-element="two-points-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement} data-toggle="tooltip" data-placement="top" title="When player shoots two point shots without scoring (but 3 or more shots !!!) he is penalized with negative points (first three misses are -2pt and every next miss is -1pt)">
                                        <span className="label" data-stats-element="two-points-wrapper">
                                            Za dva poena - penali:
                                    </span>
                                        <span className={`data ${this.state.tdFantasyPoints.twoPointsPenalty < 0 ? "text-danger" : ""}`} data-stats-element="two-points-wrapper">
                                            {this.state.tdFantasyPoints.twoPointsPenalty}
                                        </span>
                                    </div>
                                </div>



                                <div>
                                    <div className={`single-item-wrapper d-flex justify-content-between ${this.state.hoveredElement === "three-points-wrapper" ? "isHovered" : ""}`} data-stats-element="three-points-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement} data-toggle="tooltip" data-placement="top" title=" All three point shots scored by player are multiplied by three points shot percentage">
                                        <span className="label" data-stats-element="three-points-wrapper">
                                            Za tri poena:
                                        </span>
                                        <span className="data" data-stats-element="three-points-wrapper">
                                            {this.state.tdFantasyPoints.threePoints}
                                        </span>
                                    </div>
                                    <div className={`single-item-bonus-wrapper d-flex justify-content-between ${this.state.hoveredElement === "three-points-wrapper" ? "isHovered" : ""}`} data-stats-element="three-points-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement} data-toggle="tooltip" data-placement="top" title="When player shoots three point shots without miss (but 3 or more shots !!!) he is rewarded with bonus - 100%">
                                        <span className="label" data-stats-element="three-points-wrapper">
                                            Za tri poena - bonusi:
                                        </span>
                                        <span className={`data ${this.state.tdFantasyPoints.threePointsBonus > 0 ? "text-success" : ""}`} data-stats-element="three-points-wrapper">
                                            {this.state.tdFantasyPoints.threePointsBonus}
                                        </span>
                                    </div>
                                    <div className={`single-item-penalty-wrapper d-flex justify-content-between ${this.state.hoveredElement === "three-points-wrapper" ? "isHovered" : ""}`} data-stats-element="three-points-wrapper" onMouseEnter={this.depositHoveredElement} onMouseLeave={this.removeHoveredElement} data-toggle="tooltip" data-placement="top" title="When player shoots three points shots without scoring (but 3 or more shots !!!) he is penalized with negative points (first three misses are -3pt and every next miss is -1pt)">
                                        <span className="label" data-stats-element="three-points-wrapper">
                                            Za tri poena - penali:
                                        </span>
                                        <span className={`data ${this.state.tdFantasyPoints.threePointsPenalty < 0 ? "text-danger" : ""}`} data-stats-element="three-points-wrapper">
                                            {this.state.tdFantasyPoints.threePointsPenalty}
                                        </span>
                                    </div>
                                </div>
                                <div className="summa-summarum-fantasy-points d-flex justify-content-between">
                                    <span className="label">
                                        Summa Summarum:
                                    </span>
                                    <span className="data">
                                        {this.state.tdFantasyPoints.summaSummarum}
                                    </span>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="bottom-container d-flex justify-content-between">
                        <div className="grand-total-wrapper d-flex justify-content-between align-items-center">
                            <div className="label">
                                Ukupan zbir Sportske Fantazi poena za sada:
                        </div>
                            <div className="data">
                                {calculateBasketballPlayerTDFantasyGrandTotalPoints(this.context.selectedPlayerForPlayerCardModal).toFixed(2)} Poena
                        </div>
                        </div>
                        {this.context.showSelectPlayer && !this.context.isHallOfFame &&
                            <button type="button" className="btn btn-success" data-picked-player-id={`${this.context.selectedPlayerForPlayerCardModal._id.$oid}`} onClick={this.pickThisPlayerForTeam}>Želim ovog igrača u svojoj ekipi za rundu {serbischeDatum(this.context.selectedDay)}</button>
                        }
                    </div>
                    <span className="rounding-notification">
                        *Zbog zaokruživanja ukupan zbir se može ne slagati za decimalu ili dve
                    </span>
                </div>
            </Modal>
        )
    }
}

export default SRBPlayerCardModal