import React from 'react';
import { AppContext } from '../screens/_context/AppContext';
import Header from './common/Header';
import DashboardSelectDay from './common/DashboardSelectDay';
import PlayersOnField from './common/PlayersOnField';
import SelectPlayer from './common/SelectPlayer';
import DashboardSelectTeam from './common/DashboardSelectTeam';



class UserScreen extends React.Component {
    static contextType = AppContext;

    componentDidMount() {
        const userKey = sessionStorage.getItem('maRSiCnemAPojmAhehehe');
        this.context.getFantasyDataContext()
    }
    toggleShowSelectDayDashboard = () => {
        this.context.toggleShowSelectDayDashboard()
    }
    goBackToTeamView = () => {
        this.context.goBackToTeamView()
    }

    checkMainContainerWidth = () => {
        if (!this.context.showSelectDayDashboard && !this.context.showSelectTeamDashboard) {
            return "dashboard-none"
        } else if ((this.context.showSelectDayDashboard && !this.context.showSelectTeamDashboard) ||
            (!this.context.showSelectDayDashboard && this.context.showSelectTeamDashboard)) {
            return "dashboard-one"
        } else {
            return "dashboard-two"
        }
    }
    render() {
        return (
            <>
                {this.context.isInitialLoading &&
                    <h1>IT's Loading</h1>}
                {!this.context.isInitialLoading &&
                    <div className="user-screen-container d-flex flex-column justify-content-between">
                        <Header />
                        <div className="d-flex justify-content-between">
                            <DashboardSelectDay />
                            <div className={`main-screen-container ${this.checkMainContainerWidth()}`}>
                                {this.context.showTeam && <PlayersOnField />}
                                {/* vs */}
                                {this.context.showSelectPlayer && <SelectPlayer />}
                            </div>
                            <DashboardSelectTeam />
                        </div>
                        <div className="user-screen-dashboard-select-day-wrapper">
                            {!this.context.showSelectPlayer && <div className="select-round-button" onClick={this.toggleShowSelectDayDashboard}>{this.context.showSelectDayDashboard ? "close Round-picker" : "open Round-picker"}</div>}
                            {this.context.showSelectPlayer && <div className="select-round-button" onClick={this.goBackToTeamView}>{`close ${this.context.choosePlayerPosition} pick options`}</div>}
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default UserScreen