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
        this.context.getFantasyDataContext()
        this.context.depositIsNotHallOfFame()
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
                    <div className="loader-container d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column align-items-center">
                            <h1>Loading . . .</h1>
                            <div className="crveno d-flex">
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-danger" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-primary" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            <div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-light" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            <div className="made-in"><i>Made in Land of Basketball</i></div>
                        </div>
                    </div>
                }
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
                            {!this.context.showSelectPlayer && <div className="select-round-button" onClick={this.toggleShowSelectDayDashboard}>{this.context.showSelectDayDashboard ? "hide Round-picker" : "show Round-picker"}</div>}
                            {this.context.showSelectPlayer && <div className="select-round-button" onClick={this.goBackToTeamView}>{`Pick ${this.context.choosePlayerPosition} or click here to go back on Team View screen`}</div>}
                        </div>
                    </div>
                }

            </>
        )
    }
}

export default UserScreen