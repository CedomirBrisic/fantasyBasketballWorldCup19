import React from 'react';
import { AppContext } from '../screens/_context/AppContext';
import Header from './common/Header';
import DashboardSelectDay from './common/DashboardSelectDay';
import ShowPlayersOnField from './common/ShowPlayersOnField';
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
    toggleShowSelectTeamDashboard = () => {
        this.context.toggleShowSelectTeamDashboard()
    }

    checkMainContainerWidth = () => {
        if (!this.context.showSelectDayDashboard && !this.context.showSelectTeamDashboard){
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
                                {/* <ShowPlayersOnField /> */}
                                {/* vs */}
                                <SelectPlayer />
                            </div>
                            <DashboardSelectTeam />
                        </div>
                        <div className="user-screen-dashboard-select-day-wrapper d-flex justify-content-between align-items-center">
                            <div className="select-round-button" onClick={this.toggleShowSelectDayDashboard}>{this.context.showSelectDayDashboard ? "close Select Round options" : "open Select Round options"}</div>
                            <div className="select-round-button" onClick={this.toggleShowSelectTeamDashboard}>{this.context.showSelectTeamDashboard ? "close Select Players options" : "open Select Players options"}</div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default UserScreen