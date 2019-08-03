import React from 'react';
import { AppContext } from '../../screens/_context/AppContext';
import humanReadDateAndTime from "../../services/humanReadDateAndTime";

class SelectPlayer extends React.Component {
    static contextType = AppContext;
    state = {
        nowDateAndTime: humanReadDateAndTime(),
    }
    // componentDidMount() {
    //     this.interval = setInterval(
    //         () => this.clocify(),
    //         1000
    //     );
    // }

    clocify() {
        this.setState({
            nowDateAndTime: humanReadDateAndTime()
        });
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
        const outputPlayers = []
        // if (selectedTeam === null) {
        //     return <div className="team-not-selected">
        //         Be smart... Choose team first (it's on right side ->)
        //     </div>
        // } else
        // if (selectedTeam === "all-eligible-teams") {
            if (selectedDay === "4th-September")
        players.forEach((player, index) => {
            const outputPlayer =
                <tr key={player.name + index} className="single-player-item">
                    <td>{`# ${player.shirtNumber}`}</td>
                    <td>{`${player.name}`}</td>
                    <td>{`${player.team}`}</td>
                    <td>{`${player[selectedDay].teamWin}`}</td>
                    <td>{`${player[selectedDay].assists}`}</td>
                    <td>{`${player[selectedDay].rebounds}`}</td>
                    <td>{`${player[selectedDay].blocks}`}</td>
                    <td>{`${player[selectedDay].steals}`}</td>
                    <td>{`${player[selectedDay].turnovers}`}</td>
                    <td>Free throws</td>
                    <td>Field goals</td>
                    <td>Three points</td>
                </tr>
            outputPlayers.push(outputPlayer)
        })
        // } 
        // else {

        // const outputPlayers = []
        // return players.map((player) => {
        //     if (player.team === selectedTeam) {
        //         const outputPlayer =
        //             <div className="single-player-item d-flex justify-content-between">

        //             </div>
        //     }
        // })
        // }
        console.log(outputPlayers)
        return outputPlayers
    }
    render() {
        return (
            <section className="select-player-container d-flex flex-column">
                <div className="d-flex justify-content-between w-100 select-player-label-wrapper">
                    <div>
                        {this.context.selectedTeam &&
                            this.context.selectedTeam === "Cote d'Ivoire" &&
                            <a href={`http://www.fiba.basketball/basketballworldcup/2019/team/Cote-d-Ivoire`} target="_blank" ><button type="button" className="btn btn-outline-light">{`Find out more about ${this.context.selectedTeam} national team`}</button></a>
                        }
                        {this.context.selectedTeam &&
                            this.context.selectedTeam !== "all-eligible-teams" &&
                            this.context.selectedTeam !== "Cote d'Ivoire" &&
                            <a href={`http://www.fiba.basketball/basketballworldcup/2019/team/${this.checkSelectedTeamString()}`} target="_blank"><button type="button" className="btn btn-outline-light">{`Find out more about ${this.context.selectedTeam} national team`}</button></a>
                        }
                    </div>
                    <div className="label-and-clock-wrapper d-flex justify-content-between">
                        <div className="table-label">
                            <i>Table below is showing game stats</i>
                        </div>
                        <div className="clockify-wrapper d-flex justify-content-between">
                            <span>
                                Zulu time:
                        </span>
                            <span>
                                {this.state.nowDateAndTime.humanDate}
                            </span>
                            <span>
                                {this.state.nowDateAndTime.humanTime}
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
                                <th>Game won</th>
                                <th>Assists</th>
                                <th>Rebounds</th>
                                <th>Blocks</th>
                                <th>Steals</th>
                                <th>Turnovers</th>
                                <th>Free throws</th>
                                <th>Field goals</th>
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