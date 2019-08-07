import React from 'react';
import { AppContext } from '../..//screens/_context/AppContext';

class DashboardSelectTeam extends React.Component {
    static contextType = AppContext;
    state = {
    }

    depositSelectedTeam = (event) => {

        const isClickable = event.target.getAttribute("data-is-clickable")
        if (isClickable === "true") {
            const selectedTeam = event.target.getAttribute("data-selected-team")
            this.context.changeSelectedTeam(selectedTeam)
        }
    }

    mapEligibleTeams = () => {
        const selectedDay = this.context.selectedDay

        if (Array.isArray(this.context.dropdowns[0].teamsByDay[selectedDay])) {
            return this.context.dropdowns[0].teamsByDay[selectedDay].map((team, index) => {
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
                } else {
                    const possibleMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    if (possibleMonths.indexOf(selectedDay.split("-")[1]) < possibleMonths.indexOf(this.context.nowDateAndTime.humanDate.split("-")[1])) {
                        isEligible = false
                    } else if (possibleMonths.indexOf(selectedDay.split("-")[1]) === possibleMonths.indexOf(this.context.nowDateAndTime.humanDate.split("-")[1])) {
                        if (selectedDay.split("-")[0].length < this.context.nowDateAndTime.humanDate.split("-")[0].length) {
                            isEligible = false
                        } else if (selectedDay.split("-")[0].length === this.context.nowDateAndTime.humanDate.split("-")[0].length && selectedDay.split("-")[0].length === 3) {
                            if (selectedDay.split("-")[0][0] < this.context.nowDateAndTime.humanDate.split("-")[0][0]) {
                                isEligible = false
                            }
                        } else if (selectedDay.split("-")[0].length === this.context.nowDateAndTime.humanDate.split("-")[0].length && selectedDay.split("-")[0].length === 4) {
                            let selectedDayNumber = parseInt(selectedDay.split("-")[0][0] + selectedDay.split("-")[0][1], 10)
                            let nowDateNumber = parseInt(this.context.nowDateAndTime.humanDate.split("-")[0][0] + this.context.nowDateAndTime.humanDate.split("-")[0][1], 10)
                            if (selectedDayNumber < nowDateNumber) {
                                isEligible = false
                            }
                        }
                    }
                }

                return <button key={team.name + index} type="button" className={`btn d-flex align-items-center ${isEligible ? "btn-outline-light" : "btn-outline-dark"} ${this.context.selectedTeam === `${team.name}` ? "is-selected" : ""}`} data-selected-team={`${team.name}`} data-is-clickable={`${isEligible}`} onClick={this.depositSelectedTeam}>
                    <span className="team-image-wrapper" data-selected-team={`${team.name}`}>
                        <img className="img-fluid" src={require(`../../images/flags/Flag of ${team.name}.png`)} alt={`${team.name}`} data-selected-team={`${team.name}`} data-is-clickable={`${isEligible}`} />
                    </span>
                    <span className="team-title" data-selected-team={`${team.name}`} data-is-clickable={`${isEligible}`}>
                        {team.name}
                    </span>
                </button>
            })
        } else {
            return <div className="na-message">
                {this.context.dropdowns[0].teamsByDay[selectedDay]}
            </div>
        }
    }
    render() {
        return (
            <section className={`dashboard-select-team-container d-flex flex-column justify align-items-center ${this.context.showSelectTeamDashboard ? "show-selected-team" : ""}`}>
                <button type="button" className={`btn btn-outline-light select-all ${this.context.selectedTeam === "all-eligible-teams" ? "is-selected" : ""}`} data-selected-team="all-eligible-teams" data-is-clickable="true" onClick={this.depositSelectedTeam}><i>Show all eligible players</i></button>
                <div className="dashboard-select-team-list-wrapper d-flex flex-column justify-content-between ">
                    {this.mapEligibleTeams()}
                </div>
            </section>
        )
    }
}

export default DashboardSelectTeam