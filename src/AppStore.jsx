import React, { Component } from 'react';
import { AppContext } from "./screens/_context/AppContext";
import getFantasyData from "./webhooks/getFantasyData";

export default class AppStore extends Component {
    state = {
        basketballPlayers: null,
        dropdowns: null,
        fantasyUsers: null,

        showSelectDayDashboard: false,
        showSelectTeamDashboard: false,

        selectedDay: null,
        selectedTeam: null,


        isInitialLoading: true,
    }

    changeSelectedDay = (data) => {
        this.setState({
            selectedDay: data
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
                selectedDay: response.dropdowns[0].todayDay,
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
                changeSelectedDay:this.changeSelectedDay,
                changeSelectedTeam: this.changeSelectedTeam
            }}>

                {this.props.children}
            </AppContext.Provider >
        )
    }
}
