import React from 'react';
import { AppContext } from '../_context/AppContext';
import { Portal } from 'react-portal';
import eligibleDays from "../../services/eligibleDays";
import calculateBasketballPlayerTDFantasyGrandTotalPoints from "../../services/calculateBasketballPlayerTDFantasyGrandTotalPoints";
import sortPlayersOnSelectScreen from "../../services/sortPlayersOnSelectScreen";
import PlayerCardModal from "../modals/PlayerCardModal";



class HallOfFamePlayerListStats extends React.Component {
    static contextType = AppContext;
    state = {
        sortFilterValue: "ptPerGame",
        playerSearchValue : ""

    }
    depositSortFilterValue = (event) => {
        const sortFilterValue = event.target.getAttribute("data-sort-filter-value")
        this.setState({
            sortFilterValue
        })
    }
    mapPlayers = () => {
        const basketballPlayers = this.context.basketballPlayers
        const selectedPlayersIds = []
        const outputPlayers = []

        if (this.context.hallOfFameSelectedDay === "all-days" && basketballPlayers !== null) {
            basketballPlayers.forEach((player, index) => {
                let assistsSum = 0;
                let reboundsSum = 0;
                let blocksSum = 0;
                let stealsSum = 0;
                let turnoversSum = 0;
                let freeThrowsScoredSum = 0;
                let freeThrowsAttemptsSum = 0;
                let fieldGoalsScoredSum = 0;
                let fieldGoalsAttemptsSum = 0;
                let threePointsScoredSum = 0;
                let threePointsAttemptsSum = 0;
                let gamesPlayed = 0;
                eligibleDays.forEach((day) => {
                    if (player[day].assists !== "n/a") {
                        gamesPlayed++
                        assistsSum = assistsSum + parseInt(player[day].assists)
                        reboundsSum = reboundsSum + parseInt(player[day].rebounds)
                        blocksSum = blocksSum + parseInt(player[day].blocks, 10)
                        stealsSum = stealsSum + parseInt(player[day].steals, 10)
                        turnoversSum = turnoversSum + parseInt(player[day].turnovers, 10)
                        freeThrowsScoredSum = freeThrowsScoredSum + parseInt(player[day].freeThrowScored, 10)
                        freeThrowsAttemptsSum = freeThrowsAttemptsSum + parseInt(player[day].freeThrowAttempts, 10)
                        fieldGoalsScoredSum = fieldGoalsScoredSum + parseInt(player[day].fieldGoalsScored, 10)
                        fieldGoalsAttemptsSum = fieldGoalsAttemptsSum + parseInt(player[day].fieldGoalsAttempts, 10)
                        threePointsScoredSum = threePointsScoredSum + parseInt(player[day].threePointsScored, 10)
                        threePointsAttemptsSum = threePointsAttemptsSum + parseInt(player[day].threePointsAttempts, 10)
                    }
                })


                const outputPlayer =
                    <tr key={player.name + index} className="single-player-item" data-player-name={player.name} data-player-team={player.team} onClick={this.context.showSinglePlayerModal}>
                        <td data-player-name={player.name} data-player-team={player.team}>{` ${(calculateBasketballPlayerTDFantasyGrandTotalPoints(player) / gamesPlayed).toFixed(2)}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${player.name}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${player.team}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${(assistsSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (assistsSum / gamesPlayed).toFixed(2)}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${(reboundsSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (reboundsSum / gamesPlayed).toFixed(2)}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${(blocksSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (blocksSum / gamesPlayed).toFixed(2)}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${(stealsSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (stealsSum / gamesPlayed).toFixed(2)}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${(turnoversSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (turnoversSum / gamesPlayed).toFixed(2)}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${(freeThrowsScoredSum / gamesPlayed).toFixed(2) === "NaN" ? "n" : (freeThrowsScoredSum / gamesPlayed).toFixed(2)}/${(freeThrowsAttemptsSum / gamesPlayed).toFixed(2) === "NaN" ? "a" : (freeThrowsAttemptsSum / gamesPlayed).toFixed(2)}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${(fieldGoalsScoredSum / gamesPlayed).toFixed(2) === "NaN" ? "n" : (fieldGoalsScoredSum / gamesPlayed).toFixed(2)}/${(fieldGoalsAttemptsSum / gamesPlayed).toFixed(2) === "NaN" ? "a" : (fieldGoalsAttemptsSum / gamesPlayed).toFixed(2)}`}</td>
                        <td data-player-name={player.name} data-player-team={player.team}>{`${(threePointsScoredSum / gamesPlayed).toFixed(2) === "NaN" ? "n" : (threePointsScoredSum / gamesPlayed).toFixed(2)}/${(threePointsAttemptsSum / gamesPlayed).toFixed(2) === "NaN" ? "a" : (threePointsAttemptsSum / gamesPlayed).toFixed(2)}`}</td>
                    </tr>

                const indx = selectedPlayersIds.indexOf(player._id.$oid)
                if (indx === -1) {
                    outputPlayers.push(outputPlayer)
                }
            })
        }

        const sortedOutputPlayer = sortPlayersOnSelectScreen(outputPlayers, this.state.sortFilterValue, this.state.playerSearchValue)
        return sortedOutputPlayer
    }



    render() {

        return (
            <>
                <div className="hall-of-fame-player-list-stats-container">
                    <div className="players-table-container">
                        <table className="w-100">
                            <thead className="w-100">
                                <tr className="w-100">
                                    <th data-sort-filter-value="ptPerGame" onClick={this.depositSortFilterValue}><button data-sort-filter-value="ptPerGame" type="button" className={`btn ${this.state.sortFilterValue === "ptPerGame" ? "btn-success" : "btn-outline-dark"}`}>Fantasy points</button></th>
                                    <th><button data-sort-filter-value="playerName" type="button" className={`btn ${this.state.sortFilterValue === "playerName" ? "btn-success" : "btn-outline-dark"}`}>Player name</button></th>
                                    <th><button data-sort-filter-value="playerTeam" type="button" className={`btn ${this.state.sortFilterValue === "playerTeam" ? "btn-success" : "btn-outline-dark"}`}>Team</button></th>
                                    <th data-sort-filter-value="assists" onClick={this.depositSortFilterValue}><button data-sort-filter-value="assists" type="button" className={`btn ${this.state.sortFilterValue === "assists" ? "btn-success" : "btn-outline-dark"}`}>Assists</button></th>
                                    <th data-sort-filter-value="rebounds" onClick={this.depositSortFilterValue}><button data-sort-filter-value="rebounds" type="button" className={`btn ${this.state.sortFilterValue === "rebounds" ? "btn-success" : "btn-outline-dark"}`}>Rebounds</button></th>
                                    <th data-sort-filter-value="blocks" onClick={this.depositSortFilterValue}><button data-sort-filter-value="blocks" type="button" className={`btn ${this.state.sortFilterValue === "blocks" ? "btn-success" : "btn-outline-dark"}`}>Blocks</button></th>
                                    <th data-sort-filter-value="steals" onClick={this.depositSortFilterValue}><button data-sort-filter-value="steals" type="button" className={`btn ${this.state.sortFilterValue === "steals" ? "btn-success" : "btn-outline-dark"}`}>Steals</button></th>
                                    <th data-sort-filter-value="turnovers" onClick={this.depositSortFilterValue}><button data-sort-filter-value="turnovers" type="button" className={`btn ${this.state.sortFilterValue === "turnovers" ? "btn-success" : "btn-outline-dark"}`}>Turnovers</button></th>
                                    <th data-sort-filter-value="freeThrows" onClick={this.depositSortFilterValue}><button data-sort-filter-value="freeThrows" type="button" className={`btn ${this.state.sortFilterValue === "freeThrows" ? "btn-success" : "btn-outline-dark"}`}>Free throws</button></th>
                                    <th data-sort-filter-value="twoPoints" onClick={this.depositSortFilterValue}><button data-sort-filter-value="twoPoints" type="button" className={`btn ${this.state.sortFilterValue === "twoPoints" ? "btn-success" : "btn-outline-dark"}`}>Two points</button></th>
                                    <th data-sort-filter-value="threePoints" onClick={this.depositSortFilterValue}><button data-sort-filter-value="threePoints" type="button" className={`btn ${this.state.sortFilterValue === "threePoints" ? "btn-success" : "btn-outline-dark"}`}>Three points</button></th>
                                </tr>
                            </thead>
                            <tbody className="players-data-container">
                                {this.mapPlayers()}
                            </tbody>
                        </table>
                    </div>
                </div>
                {this.context.selectedPlayerForPlayerCardModal &&
                    <Portal>
                        <PlayerCardModal />
                    </Portal>
                }
            </>
        )
    }
}

export default HallOfFamePlayerListStats