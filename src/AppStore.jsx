import React, { Component } from 'react';
import { AppContext } from "./screens/_context/AppContext";
import getFantasyData from "./webhooks/getFantasyData";
import humanReadDateAndTime from "./services/humanReadDateAndTime";

export default class AppStore extends Component {
    state = {
        basketballPlayers: null,
        dropdowns: null,
        fantasyUsers: null,

        showSelectDayDashboard: false,
        showSelectTeamDashboard: false,

        selectedDay: null,
        selectedTeam: "all-eligible-teams",


        isInitialLoading: true,
        
    }

    changeSelectedDay = (data) => {
        this.setState({
            selectedDay: data,
            selectedTeam: "all-eligible-teams"
        })
    }
    changeSelectedTeam = (data) => {
        this.setState({
            selectedTeam: data
        })
    }

    getFantasyDataContext = () => {
        getFantasyData("neKaRendOMSiFRaOdbAsaliBasbAsDostaKARAkterA123").then((response) => {
            this.setState({
                dropdowns: response.dropdowns,
                basketballPlayers: response.basketballPlayers,
                fantasyUsers: response.fantasyUsers,
                selectedDay: humanReadDateAndTime().humanDate,
                isInitialLoading: false,
            })
        })
    }

    toggleShowSelectDayDashboard = () => {
        this.setState({
            showSelectDayDashboard: !this.state.showSelectDayDashboard,
        })
    }
    toggleShowSelectTeamDashboard = () => {
        this.setState({
            showSelectTeamDashboard: !this.state.showSelectTeamDashboard,
        })
    }



    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                getFantasyDataContext: this.getFantasyDataContext,
                toggleShowSelectDayDashboard: this.toggleShowSelectDayDashboard,
                toggleShowSelectTeamDashboard: this.toggleShowSelectTeamDashboard,
                changeSelectedDay: this.changeSelectedDay,
                changeSelectedTeam: this.changeSelectedTeam
            }}>

                {this.props.children}
            </AppContext.Provider >
        )
    }
}
