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
        selectedTeam: null,


        isInitialLoading: true,
        nowTime: null,
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

    depositTime = (time) => {
        // this.setState({
        //     nowTime: time
            console.log(time)
            // })
    }
    clockify() {
        setInterval(function () {
            const dateAndTime = humanReadDateAndTime()
            // this.setState({
            //     nowTime: dateAndTime.humanTime
            // })
            this.depositTime(dateAndTime)
        }, 1000);
    }
    componentDidMount() {
        this.clockify()
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
