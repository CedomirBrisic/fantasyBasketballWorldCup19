import React from 'react';
import { AppContext } from '../_context/AppContext';
import { Portal } from 'react-portal';
import calculateBasketballPlayerTDFantasyPoints from "../../services/calculateBasketballPlayerTDFantasyPoints";
import putTeamPickForDay from "../../webhooks/putTeamPickForDay";
import TeamPickSuccessfullySubmited from "../modals/TeamPickSuccessfullySubmited";

class PlayersOnField extends React.Component {
    static contextType = AppContext;
    state = {
        showTeamPickSuccessfullySubmited: false
    }

    choosePlayer = (event) => {
        const playerPosition = event.target.getAttribute("data-player-position")
        this.context.choosePlayerForTeam(playerPosition)
    }

    calculatePlayerRoundPoints = (inputPlayerData) => {
        const calculatedPlayerData = calculateBasketballPlayerTDFantasyPoints(inputPlayerData, this.context.selectedDay)
        return calculatedPlayerData.summaSummarum
    }
    mapPlayer1OnField = () => {
        if (this.context.teamPickData.Player1Id !== null) {
            const playerId = this.context.teamPickData.Player1Id
            const playerData = this.context.basketballPlayers.filter((player) => playerId === player._id.$oid)
            return <div key={playerData[0].shirtNumber + playerData[0].team} className={`first-five-player-wrapper-selected d-flex flex-column justify-content-between align-items-center ${this.context.showSelectDayDashboard ? "" : "glow"}`}>
                <div className="shirt-number d-flex">
                    {this.calculatePlayerRoundPoints(playerData[0])}
                    <span className="pt">pt</span>
                </div>
                <div className="player-name">
                    {playerData[0].name}
                </div>
                <div className="player-team-wrapper d-flex align-items-center">
                    <span className="team-image-wrapper">
                        <img className="img-fluid" src={require(`../../images/flags/Flag of ${playerData[0].team}.png`)} alt={`${playerData[0].team}`} />
                    </span>
                    <span className="team-name">
                        {playerData[0].team}
                    </span>
                </div>
                {!this.context.teamPickLockData.Player1Id &&
                    <button type="button" className="btn btn-outline-dark change-player" data-player-position="Player 1" onClick={this.choosePlayer}>Change player</button>
                }
            </div>
        }
    }

    mapPlayer2OnField = () => {
        if (this.context.teamPickData.Player2Id !== null) {
            const playerId = this.context.teamPickData.Player2Id
            const playerData = this.context.basketballPlayers.filter((player) => playerId === player._id.$oid)
            return <div key={playerData[0].shirtNumber + playerData[0].team} className={`first-five-player-wrapper-selected d-flex flex-column justify-content-between align-items-center ${this.context.showSelectDayDashboard ? "" : "glow"}`}>
                <div className="shirt-number d-flex">
                    {this.calculatePlayerRoundPoints(playerData[0])}
                    <span className="pt">pt</span>
                </div>
                <div className="player-name">
                    {playerData[0].name}
                </div>
                <div className="player-team-wrapper d-flex align-items-center">
                    <span className="team-image-wrapper">
                        <img className="img-fluid" src={require(`../../images/flags/Flag of ${playerData[0].team}.png`)} alt={`${playerData[0].team}`} />
                    </span>
                    <span className="team-name">
                        {playerData[0].team}
                    </span>
                </div>
                {!this.context.teamPickLockData.Player2Id &&
                    <button type="button" className="btn btn-outline-dark change-player" data-player-position="Player 2" onClick={this.choosePlayer}>Change player</button>
                }
            </div>
        }
    }

    mapPlayer3OnField = () => {
        if (this.context.teamPickData.Player3Id !== null) {
            const playerId = this.context.teamPickData.Player3Id
            const playerData = this.context.basketballPlayers.filter((player) => playerId === player._id.$oid)
            return <div key={playerData[0].shirtNumber + playerData[0].team} className={`first-five-player-wrapper-selected d-flex flex-column justify-content-between align-items-center ${this.context.showSelectDayDashboard ? "" : "glow"}`}>
                <div className="shirt-number d-flex">
                    {this.calculatePlayerRoundPoints(playerData[0])}
                    <span className="pt">pt</span>
                </div>
                <div className="player-name">
                    {playerData[0].name}
                </div>
                <div className="player-team-wrapper d-flex align-items-center">
                    <span className="team-image-wrapper">
                        <img className="img-fluid" src={require(`../../images/flags/Flag of ${playerData[0].team}.png`)} alt={`${playerData[0].team}`} />
                    </span>
                    <span className="team-name">
                        {playerData[0].team}
                    </span>
                </div>
                {!this.context.teamPickLockData.Player3Id &&
                    <button type="button" className="btn btn-outline-dark change-player" data-player-position="Player 3" onClick={this.choosePlayer}>Change player</button>
                }
            </div>
        }
    }

    mapPlayer4OnField = () => {
        if (this.context.teamPickData.Player4Id !== null) {
            const playerId = this.context.teamPickData.Player4Id
            const playerData = this.context.basketballPlayers.filter((player) => playerId === player._id.$oid)
            return <div key={playerData[0].shirtNumber + playerData[0].team} className={`first-five-player-wrapper-selected d-flex flex-column justify-content-between align-items-center ${this.context.showSelectDayDashboard ? "" : "glow"}`}>
                <div className="shirt-number d-flex">
                    {this.calculatePlayerRoundPoints(playerData[0])}
                    <span className="pt">pt</span>
                </div>
                <div className="player-name">
                    {playerData[0].name}
                </div>
                <div className="player-team-wrapper d-flex align-items-center">
                    <span className="team-image-wrapper">
                        <img className="img-fluid" src={require(`../../images/flags/Flag of ${playerData[0].team}.png`)} alt={`${playerData[0].team}`} />
                    </span>
                    <span className="team-name">
                        {playerData[0].team}
                    </span>
                </div>
                {!this.context.teamPickLockData.Player4Id &&
                    <button type="button" className="btn btn-outline-dark change-player" data-player-position="Player 4" onClick={this.choosePlayer}>Change player</button>
                }
            </div>
        }
    }

    mapPlayer5OnField = () => {
        if (this.context.teamPickData.Player5Id !== null) {
            const playerId = this.context.teamPickData.Player5Id
            const playerData = this.context.basketballPlayers.filter((player) => playerId === player._id.$oid)
            return <div key={playerData[0].shirtNumber + playerData[0].team} className={`first-five-player-wrapper-selected d-flex flex-column justify-content-between align-items-center ${this.context.showSelectDayDashboard ? "" : "glow"}`}>
                <div className="shirt-number d-flex">
                    {this.calculatePlayerRoundPoints(playerData[0])}
                    <span className="pt">pt</span>
                </div>
                <div className="player-name">
                    {playerData[0].name}
                </div>
                <div className="player-team-wrapper d-flex align-items-center">
                    <span className="team-image-wrapper">
                        <img className="img-fluid" src={require(`../../images/flags/Flag of ${playerData[0].team}.png`)} alt={`${playerData[0].team}`} />
                    </span>
                    <span className="team-name">
                        {playerData[0].team}
                    </span>
                </div>
                {!this.context.teamPickLockData.Player5Id &&
                    <button type="button" className="btn btn-outline-dark change-player" data-player-position="Player 5" onClick={this.choosePlayer}>Change player</button>
                }
            </div>
        }
    }

    mapPlayer6OnField = () => {
        if (this.context.teamPickData.Player6Id !== null) {
            const playerId = this.context.teamPickData.Player6Id
            const playerData = this.context.basketballPlayers.filter((player) => playerId === player._id.$oid)
            return <div key={playerData[0].shirtNumber + playerData[0].team} className={`bench-player-wrapper-selected d-flex flex-column justify-content-between align-items-center ${this.context.showSelectDayDashboard ? "" : "glow"}`}>
                <div className="shirt-number d-flex">
                    {this.calculatePlayerRoundPoints(playerData[0])}
                    <span className="pt">pt</span>
                </div>
                <div className="player-name">
                    {playerData[0].name}
                </div>
                <div className="player-team-wrapper d-flex align-items-center">
                    <span className="team-image-wrapper">
                        <img className="img-fluid" src={require(`../../images/flags/Flag of ${playerData[0].team}.png`)} alt={`${playerData[0].team}`} />
                    </span>
                    <span className="team-name">
                        {playerData[0].team}
                    </span>
                </div>
                {!this.context.teamPickLockData.Player6Id &&
                    <button type="button" className="btn btn-outline-dark change-player" data-player-position="Player 6" onClick={this.choosePlayer}>Change player</button>
                }
            </div>
        }
    }

    mapPlayer7OnField = () => {
        if (this.context.teamPickData.Player7Id !== null) {
            const playerId = this.context.teamPickData.Player7Id
            const playerData = this.context.basketballPlayers.filter((player) => playerId === player._id.$oid)
            return <div key={playerData[0].shirtNumber + playerData[0].team} className={`bench-player-wrapper-selected d-flex flex-column justify-content-between align-items-center ${this.context.showSelectDayDashboard ? "" : "glow"}`}>
                <div className="shirt-number d-flex">
                    {this.calculatePlayerRoundPoints(playerData[0])}
                    <span className="pt">pt</span>
                </div>
                <div className="player-name">
                    {playerData[0].name}
                </div>
                <div className="player-team-wrapper d-flex align-items-center">
                    <span className="team-image-wrapper">
                        <img className="img-fluid" src={require(`../../images/flags/Flag of ${playerData[0].team}.png`)} alt={`${playerData[0].team}`} />
                    </span>
                    <span className="team-name">
                        {playerData[0].team}
                    </span>
                </div>
                {!this.context.teamPickLockData.Player7Id &&
                    <button type="button" className="btn btn-outline-dark change-player" data-player-position="Player 7" onClick={this.choosePlayer}>Change player</button>
                }
            </div>
        }
    }

    sendTeamPick = () => {
        const teamPickData = {
            ...this.context.teamPickData,
            ["isSubmitted"]: true
        }
        const data = {
            username: this.context.bitrulez,
            selectedDay: this.context.selectedDay,
            teamPickData,
        }
        putTeamPickForDay(data, "opETBasNekaDugaCkaSIfraOdmnogOKARAkterAMalaIVelikaSlovaSve").then((response) => {
            this.setState({
                showTeamPickSuccessfullySubmited: true
            })
        })
    }

    checkItsReadyButton = () => {
        const teamPickData = this.context.teamPickData
        const pickPlayerPosition = ["Player1Id", "Player2Id", "Player3Id", "Player4Id", "Player5Id", "Player6Id", "Player7Id"]
        let pickCounter = 0
        pickPlayerPosition.forEach((pickPlayer) => {
            if (teamPickData[pickPlayer] !== null) {
                pickCounter++
            }
        })
        if (this.context.teamPickData.isSubmitted) {
            return ""
        } else if (pickCounter === 7) {
            return <button type="button" className="btn btn-success align-self-end" onClick={this.sendTeamPick}>That's it! I'm ready to go</button>
        } else {
            return <button type="button" className="btn btn-light align-self-end" disabled>Choose all 7 players before submitting</button>
        }
    }

    closeTeamPickSuccessfullySubmitedModal = () => {
        this.setState({
            showTeamPickSuccessfullySubmited: false
        })
        this.context.teamPickIsSubmitted()
    }
    render() {
        return (
            <>
                <div className="show-players-on-field-container d-flex flex-column justify-content-between">
                    <div className="screen-title d-flex justify-content-between align-items-center">
                        <div>{this.context.bitrulez}'s Team for {this.context.selectedDay}</div>
                        <div className="clockify-wrapper d-flex justify-content-between">
                            <span>
                                Zulu time:
                            </span>
                            <span>
                                {this.context.nowDateAndTime.humanDate}
                            </span>
                            <span>
                                {this.context.nowDateAndTime.humanTime}
                            </span>
                        </div>
                    </div>
                    <section className="picked-players-container d-flex flex-column justify-content-between">
                        <div className="three-players-container d-flex justify-content-around">


                            {/* PLAYER 1 */}
                            {this.context.teamPickData.Player1Id === null &&
                                <div className="first-five-player-wrapper" data-player-position="Player 1" onClick={this.choosePlayer}>
                                    <div className="not-selected-player" data-player-position="Player 1">
                                        <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-1.png")} alt="player 1" data-player-position="Player 1" />
                                        <div className="pick-player-title" data-player-position="Player 1">Pick player 1</div>
                                    </div>
                                </div>
                            }
                            {this.context.teamPickData.Player1Id !== null &&
                                this.mapPlayer1OnField()}


                            {/* PLAYER 2 */}
                            {this.context.teamPickData.Player2Id === null &&
                                <div className="first-five-player-wrapper" data-player-position="Player 2" onClick={this.choosePlayer}>
                                    <div className="not-selected-player" data-player-position="Player 2">
                                        <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-2.png")} alt="player 1" data-player-position="Player 2" />
                                        <div className="pick-player-title" data-player-position="Player 2">Pick player 2</div>
                                    </div>
                                </div>}
                            {this.context.teamPickData.Player2Id !== null &&
                                this.mapPlayer2OnField()}



                            {/* PLAYER 3 */}
                            {this.context.teamPickData.Player3Id === null &&
                                <div className="first-five-player-wrapper" data-player-position="Player 3" onClick={this.choosePlayer}>
                                    <div className="not-selected-player" data-player-position="Player 3">
                                        <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-3.png")} alt="player 1" data-player-position="Player 3" />
                                        <div className="pick-player-title" data-player-position="Player 3">Pick player 3</div>
                                    </div>
                                </div>}
                            {this.context.teamPickData.Player3Id !== null &&
                                this.mapPlayer3OnField()}
                        </div>


                        <div className="two-players-container d-flex justify-content-around">
                            {/* PLAYER 4 */}
                            {this.context.teamPickData.Player4Id === null &&
                                <div className="first-five-player-wrapper" data-player-position="Player 4" onClick={this.choosePlayer}>
                                    <div className="not-selected-player" data-player-position="Player 4">
                                        <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-4.png")} alt="player 1" data-player-position="Player 4" />
                                        <div className="pick-player-title" data-player-position="Player 4">Pick player 4</div>
                                    </div>
                                </div>}
                            {this.context.teamPickData.Player4Id !== null &&
                                this.mapPlayer4OnField()}


                            {/* PLAYER 5 */}
                            {this.context.teamPickData.Player5Id === null &&
                                <div className="first-five-player-wrapper" data-player-position="Player 5" onClick={this.choosePlayer}>
                                    <div className="not-selected-player" data-player-position="Player 5">
                                        <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-5.png")} alt="player 1" data-player-position="Player 5" />
                                        <div className="pick-player-title" data-player-position="Player 5">Pick player 5</div>
                                    </div>
                                </div>}
                            {this.context.teamPickData.Player5Id !== null &&
                                this.mapPlayer5OnField()}
                        </div>
                        <div className="bench-players-container d-flex justify-content-between">
                            <div className="d-flex">

                                {/* PLAYER 6 */}
                                {this.context.teamPickData.Player6Id === null &&
                                    <div className="bench-player-wrapper" data-player-position="Player 6" onClick={this.choosePlayer}>
                                        <div className="not-selected-player-b-1" data-player-position="Player 6">
                                            <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-6.png")} alt="player 1" data-player-position="Player 6" />
                                            <div className="pick-player-title" data-player-position="Player 6">Pick player 6</div>
                                        </div>
                                    </div>}
                                {this.context.teamPickData.Player6Id !== null &&
                                    this.mapPlayer6OnField()}


                                {/* PLAYER 7 */}
                                {this.context.teamPickData.Player7Id === null &&
                                    <div className="bench-player-wrapper" data-player-position="Player 7" onClick={this.choosePlayer}>
                                        <div className="not-selected-player-b-2" data-player-position="Player 7">
                                            <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-7.png")} alt="player 1" data-player-position="Player 7" />
                                            <div className="pick-player-title" data-player-position="Player 7">Pick player 7</div>
                                        </div>
                                    </div>}
                                {this.context.teamPickData.Player7Id !== null &&
                                    this.mapPlayer7OnField()}
                            </div>
                            {this.checkItsReadyButton()}
                        </div>
                    </section>
                    <table className="points-container">
                        <thead>
                            <tr className="">
                                <th>FIRST FIVE TOTAL</th>
                                <th>Assists</th>
                                <th>Rebounds</th>
                                <th>Blocks</th>
                                <th>Steals</th>
                                <th>Turnovers</th>
                                <th>Free throws</th>
                                <th>FT bonuses</th>
                                <th>FT penalties</th>
                                <th>Two points</th>
                                <th>2pt bonuses</th>
                                <th>2pt penalties</th>
                                <th>Three points</th>
                                <th>3pt bonuses</th>
                                <th>3pt penalties</th>
                            </tr>
                        </thead>
                        <tbody className="players-data-container">
                            <tr>
                                <th>
                                    Real life
                          </th>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td></td>
                                <td></td>
                                <td>23</td>
                                <td></td>
                                <td></td>
                                <td>23</td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr>
                                <th>
                                    Fantasy points
                          </th>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                                <td>23</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {this.state.showTeamPickSuccessfullySubmited &&
                    <Portal>
                        <TeamPickSuccessfullySubmited showTeamPickSuccessfullySubmited={this.state.showTeamPickSuccessfullySubmited} closeTeamPickSuccessfullySubmitedModal={this.closeTeamPickSuccessfullySubmitedModal} />
                    </Portal>
                }
            </>
        )
    }
}

export default PlayersOnField