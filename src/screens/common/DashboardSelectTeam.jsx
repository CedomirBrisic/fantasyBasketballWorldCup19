import React from 'react';
import { AppContext } from '../..//screens/_context/AppContext';

class DashboardSelectTeam extends React.Component {
    static contextType = AppContext;
    state = {
    }

    depositSelectedTeam = (event) => {
        const selectedTeam = event.target.getAttribute("data-selected-team")
        this.context.changeSelectedTeam(selectedTeam)
    }

    mapEligibleTeams = () => {
        const selectedDay = this.context.selectedDay.split(" ").join("-")

        if (Array.isArray(this.context.dropdowns[0].teamsByDay[selectedDay])) {
            return this.context.dropdowns[0].teamsByDay[selectedDay].map((team,index) => {
                return <button key={team+index} type="button" className={`btn d-flex align-items-center btn-outline-light ${this.context.selectedTeam === `${team}` ? "is-selected" : ""}`} data-selected-team={`${team}`} onClick={this.depositSelectedTeam}>
                    <span className="team-image-wrapper" data-selected-team={`${team}`}>
                        <img className="img-fluid" src={require(`../../images/flags/Flag of ${team}.png`)} alt={`${team}`} data-selected-team={`${team}`}/>
                    </span>
                    <span className="team-title" data-selected-team={`${team}`}>
                        {team}
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
                <i><button type="button" className={`btn btn-outline-light select-all ${this.context.selectedTeam === "all" ? "is-selected" : ""}`} data-selected-team="all-eligible-teams" onClick={this.depositSelectedTeam}>Show all eligible players</button></i>
                <div className="dashboard-select-team-list-wrapper d-flex flex-column justify-content-between ">
                    {this.mapEligibleTeams()}
                </div>
            </section>
        )
    }
}

export default DashboardSelectTeam