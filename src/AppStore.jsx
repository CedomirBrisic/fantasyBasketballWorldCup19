import React, { Component } from 'react';
import { AppContext } from "./screens/_context/AppContext";
import getFantasyData from "./webhooks/getFantasyData";
import humanReadDateAndTime from "./services/humanReadDateAndTime";

export default class AppStore extends Component {
    state = {
        basketballPlayers: null,
        dropdowns: null,
        fantasyUsers: null,

        showSelectDayDashboard: true,
        showSelectTeamDashboard: false,

        selectedDay: null,
        selectedTeam: "all-eligible-teams",
        nowDateAndTime: humanReadDateAndTime(),

        selectedPlayerForPlayerCardModal: null,
        showPlayerCardModal: false,

        choosePlayerPosition: null,
        showSelectPlayer: false,
        showTeam: true,
        teamPickData: {
            Player1Id: null,
            Player2Id: null,
            Player3Id: null,
            Player4Id: null,
            Player5Id: null,
            Player6Id: null,
            Player7Id: null,
        },

        isInitialLoading: true,
    }

    resetTeamPicks = () => {
        this.setState({
            teamPickData: {
                Player1Id: null,
                Player2Id: null,
                Player3Id: null,
                Player4Id: null,
                Player5Id: null,
                Player6Id: null,
                Player7Id: null,
            },
        })
    }
    choosePlayerForTeam = (position) => {
        this.setState({
            choosePlayerPosition: position,
            showTeam: false,
            showSelectPlayer: true,
            showSelectDayDashboard: false,
            showSelectTeamDashboard: true
        })
    }

    changeSelectedDay = (data) => {
        this.setState({
            selectedDay: data,
            selectedTeam: "all-eligible-teams"
        })
        this.resetTeamPicks()
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
    goBackToTeamView = () => {
        this.setState({
            choosePlayerPosition: null,
            showTeam: true,
            showSelectPlayer: false,
            showSelectDayDashboard: true,
            showSelectTeamDashboard: false
        })
    }
    pickPlayerForTeam = (inputPlayerPosition, playerId) => {
        let playerPosition = inputPlayerPosition.split(" ").join("") + "Id"
        this.setState(prevState => ({
            teamPickData: {
                ...prevState.teamPickData,
                [playerPosition]: playerId
            }
        }))
        this.goBackToTeamView()
        this.closeSinglePlayerModal()
    }

    showSinglePlayerModal = (event) => {
        const playerName = event.target.getAttribute("data-player-name")
        const playerTeam = event.target.getAttribute("data-player-team")
        const selectedPlayer = this.state.basketballPlayers.filter((player) => {
            if (player.name === playerName && player.team === playerTeam) {
                return player
            }
        })
        this.setState({
            selectedPlayerForPlayerCardModal: selectedPlayer[0],
            showPlayerCardModal: true
        })
    }
    closeSinglePlayerModal = () => {
        this.setState({
            selectedPlayerForPlayerCardModal: null,
            showPlayerCardModal: false
        })
    }
    // componentDidMount() {
    //     this.interval = setInterval(
    //         () => this.clocify(),
    //         1000
    //     );
    // }

    // clocify() {
    //     this.setState({
    //         nowDateAndTime: humanReadDateAndTime()
    //     });
    // }

    render() {
        return (
            <AppContext.Provider value={{
                ...this.state,
                getFantasyDataContext: this.getFantasyDataContext,
                toggleShowSelectDayDashboard: this.toggleShowSelectDayDashboard,
                goBackToTeamView: this.goBackToTeamView,
                changeSelectedDay: this.changeSelectedDay,
                changeSelectedTeam: this.changeSelectedTeam,
                showSinglePlayerModal: this.showSinglePlayerModal,
                closeSinglePlayerModal: this.closeSinglePlayerModal,
                choosePlayerForTeam: this.choosePlayerForTeam,
                pickPlayerForTeam: this.pickPlayerForTeam
            }}>

                {this.props.children}
            </AppContext.Provider >
        )
    }
}
