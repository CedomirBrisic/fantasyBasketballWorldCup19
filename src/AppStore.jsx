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
        nowDateAndTime: humanReadDateAndTime(),

        selectedPlayerForPlayerCardModal:null,
        showPlayerCardModal:false,

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
    componentDidMount() {
        this.interval = setInterval(
            () => this.clocify(),
            1000
        );
    }

    clocify() {
        this.setState({
            nowDateAndTime: humanReadDateAndTime()
        });
    }

    showSinglePlayerModal = (event) => {
        const playerName = event.target.getAttribute("data-player-name")
        const playerTeam = event.target.getAttribute("data-player-team")
        const selectedPlayer = this.state.basketballPlayers.filter((player) =>{
            if (player.name === playerName && player.team === playerTeam){
                return player
            }
        })
        this.setState({
            selectedPlayerForPlayerCardModal:selectedPlayer[0],
            showPlayerCardModal: true
        })
    }
    closeSinglePlayerModal = () => {
        this.setState({
            selectedPlayerForPlayerCardModal:null,
            showPlayerCardModal: false
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
                changeSelectedTeam: this.changeSelectedTeam,
                showSinglePlayerModal:this.showSinglePlayerModal,
                closeSinglePlayerModal: this.closeSinglePlayerModal
            }}>

                {this.props.children}
            </AppContext.Provider >
        )
    }
}
