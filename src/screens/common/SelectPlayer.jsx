import React from 'react';
import { AppContext } from '../../screens/_context/AppContext';
import eligibleDays from "../../services/eligibleDays";

class SelectPlayer extends React.Component {
    static contextType = AppContext;
    state = {
    }

    checkSelectedTeamString = () => {
        const selectedTeam = this.context.selectedTeam.split(" ").join("-")
        if (selectedTeam === "South-Korea") {
            return "Korea"
        } else {
            return selectedTeam
        }
    }
    mapEligiblePlayers = () => {
        const selectedTeam = this.context.selectedTeam
        const selectedDay = this.context.selectedDay
        const players = this.context.basketballPlayers
        const eligibleTeams = this.context.dropdowns[0].teamsByDay
        const outputPlayers = []

        if (selectedTeam === "all-eligible-teams" && eligibleDays.indexOf(selectedDay) !== -1) {
            if (Array.isArray(eligibleTeams[selectedDay])) {
                eligibleTeams[selectedDay].forEach((team) => {
                    let isEligible = true
                    if (selectedDay === this.context.nowDateAndTime.humanDate) {
                        const teamHour = parseInt(team.gameStart.split(":")[0])
                        const teamMinutes = parseInt(team.gameStart.split(":")[1])
                        const nowHour = parseInt(this.context.nowDateAndTime.humanTime.split(":")[0])
                        const nowMinutes = parseInt(this.context.nowDateAndTime.humanTime.split(":")[1])
                        if (nowHour > teamHour) {
                            isEligible = false
                        } else if (nowHour === teamHour) {
                            if (nowMinutes > teamMinutes) {
                                isEligible = false
                            }
                        }
                    } else if (selectedDay < this.context.nowDateAndTime.humanDate) {
                        isEligible = false
                    }
                    if (isEligible) {
                        players.forEach((player, index) => {
                            if (team.name === player.team) {
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
                                    <tr key={player.name + index} className="single-player-item">
                                        <td>{`# ${player.shirtNumber}`}</td>
                                        <td>{`${player.name}`}</td>
                                        <td>{`${player.team}`}</td>
                                        <td>{`${(assistsSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (assistsSum / gamesPlayed).toFixed(2)}`}</td>
                                        <td>{`${(reboundsSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (reboundsSum / gamesPlayed).toFixed(2)}`}</td>
                                        <td>{`${(blocksSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (blocksSum / gamesPlayed).toFixed(2)}`}</td>
                                        <td>{`${(stealsSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (stealsSum / gamesPlayed).toFixed(2)}`}</td>
                                        <td>{`${(turnoversSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (turnoversSum / gamesPlayed).toFixed(2)}`}</td>
                                        <td>{`${(freeThrowsScoredSum / gamesPlayed).toFixed(2) === "NaN" ? "n" : (freeThrowsScoredSum / gamesPlayed).toFixed(2)}/${(freeThrowsAttemptsSum / gamesPlayed).toFixed(2) === "NaN" ? "a" : (freeThrowsAttemptsSum / gamesPlayed).toFixed(2)}`}</td>
                                        <td>{`${(fieldGoalsScoredSum / gamesPlayed).toFixed(2) === "NaN" ? "n" : (fieldGoalsScoredSum / gamesPlayed).toFixed(2)}/${(fieldGoalsAttemptsSum / gamesPlayed).toFixed(2) === "NaN" ? "a" : (fieldGoalsAttemptsSum / gamesPlayed).toFixed(2)}`}</td>
                                        <td>{`${(threePointsScoredSum / gamesPlayed).toFixed(2) === "NaN" ? "n" : (threePointsScoredSum / gamesPlayed).toFixed(2)}/${(threePointsAttemptsSum / gamesPlayed).toFixed(2) === "NaN" ? "a" : (threePointsAttemptsSum / gamesPlayed).toFixed(2)}`}</td>
                                    </tr>
                                outputPlayers.push(outputPlayer)
                            }
                        })
                    }
                })
            }
        }
        else if (eligibleDays.indexOf(selectedDay) !== -1) {
            players.forEach((player, index) => {
                if (selectedTeam === player.team) {
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
                        <tr key={player.name + index} className="single-player-item">
                            <td>{`# ${player.shirtNumber}`}</td>
                            <td>{`${player.name}`}</td>
                            <td>{`${player.team}`}</td>
                            <td>{`${(assistsSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (assistsSum / gamesPlayed).toFixed(2)}`}</td>
                            <td>{`${(reboundsSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (reboundsSum / gamesPlayed).toFixed(2)}`}</td>
                            <td>{`${(blocksSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (blocksSum / gamesPlayed).toFixed(2)}`}</td>
                            <td>{`${(stealsSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (stealsSum / gamesPlayed).toFixed(2)}`}</td>
                            <td>{`${(turnoversSum / gamesPlayed).toFixed(2) === "NaN" ? "n/a" : (turnoversSum / gamesPlayed).toFixed(2)}`}</td>
                            <td>{`${(freeThrowsScoredSum / gamesPlayed).toFixed(2) === "NaN" ? "n" : (freeThrowsScoredSum / gamesPlayed).toFixed(2)}/${(freeThrowsAttemptsSum / gamesPlayed).toFixed(2) === "NaN" ? "a" : (freeThrowsAttemptsSum / gamesPlayed).toFixed(2)}`}</td>
                            <td>{`${(fieldGoalsScoredSum / gamesPlayed).toFixed(2) === "NaN" ? "n" : (fieldGoalsScoredSum / gamesPlayed).toFixed(2)}/${(fieldGoalsAttemptsSum / gamesPlayed).toFixed(2) === "NaN" ? "a" : (fieldGoalsAttemptsSum / gamesPlayed).toFixed(2)}`}</td>
                            <td>{`${(threePointsScoredSum / gamesPlayed).toFixed(2) === "NaN" ? "n" : (threePointsScoredSum / gamesPlayed).toFixed(2)}/${(threePointsAttemptsSum / gamesPlayed).toFixed(2) === "NaN" ? "a" : (threePointsAttemptsSum / gamesPlayed).toFixed(2)}`}</td>
                        </tr>
                    outputPlayers.push(outputPlayer)
                }
            })
        }
        return outputPlayers
    }
    render() {
        return (
            <section className="select-player-container d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center w-100 select-player-label-wrapper">
                    <div>
                        {this.context.selectedTeam &&
                            this.context.selectedTeam === "Cote d'Ivoire" &&
                            <a href={`http://www.fiba.basketball/basketballworldcup/2019/team/Cote-d-Ivoire`} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-light">{`Find out more about ${this.context.selectedTeam} national team`}</button></a>
                        }
                        {this.context.selectedTeam &&
                            this.context.selectedTeam !== "all-eligible-teams" &&
                            this.context.selectedTeam !== "Cote d'Ivoire" &&
                            <a href={`http://www.fiba.basketball/basketballworldcup/2019/team/${this.checkSelectedTeamString()}`} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-light">{`Find out more about ${this.context.selectedTeam} national team`}</button></a>
                        }
                        {this.context.selectedTeam === "all-eligible-teams" &&
                            <a href={`http://www.fiba.basketball/basketballworldcup/2019`} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-light">Find out more about World Cup</button></a>
                        }
                    </div>
                    <div className="label-and-clock-wrapper d-flex justify-content-between align-items-center">
                        <div className="table-label">
                            <i>Table of average per game stats</i>
                        </div>
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
                </div>


                <div className="players-table-container">
                    <table>
                        <thead>
                            <tr className="">
                                <th>No</th>
                                <th>Player name</th>
                                <th>Team</th>
                                <th>Assists</th>
                                <th>Rebounds</th>
                                <th>Blocks</th>
                                <th>Steals</th>
                                <th>Turnovers</th>
                                <th>Free throws</th>
                                <th>Two points</th>
                                <th>Three points</th>
                            </tr>
                        </thead>
                        <tbody className="players-data-container">
                            {this.mapEligiblePlayers()}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}

export default SelectPlayer