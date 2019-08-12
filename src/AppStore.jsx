import React, { Component } from 'react';
import { AppContext } from "./screens/_context/AppContext";
import getFantasyData from "./webhooks/getFantasyData";
import humanReadDateAndTime from "./services/humanReadDateAndTime";
import eligibleDays from "./services/eligibleDays";
import checkEligibilityForPickTeam from "./services/checkEligibilityForPickTeam";

export default class AppStore extends Component {
    state = {
        basketballPlayers: null,
        dropdowns: null,
        fantasyUsers: null,
        bitrulez: null,

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
            isSubmitted: false
        },
        teamPickLockData:{
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
    teamPickIsSubmitted = () => {
        window.location.reload();
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
    }
    changeSelectedTeam = (data) => {
        this.setState({
            selectedTeam: data
        })
    }
    depositUserKey = (data) => {
        this.setState({
            bitrulez: data
        })
        sessionStorage.setItem("bitrulez", data)
    }

    getFantasyDataContext = () => {
        getFantasyData("neKaRendOMSiFRaOdbAsaliBasbAsDostaKARAkterA123").then((response) => {

            let selectedDay = null
            const nowDate = humanReadDateAndTime().humanDate
            if (eligibleDays.indexOf(nowDate) !== -1){
                selectedDay = nowDate
            } else {
                selectedDay = "31st-August"
            }

            this.setState({
                dropdowns: response.dropdowns,
                basketballPlayers: response.basketballPlayers,
                fantasyUsers: response.fantasyUsers,
                selectedDay,
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
            showSelectTeamDashboard: false,
            selectedTeam: "all-eligible-teams",
        })
    }
    pickPlayerForTeam = (inputPlayerPosition, playerId) => {
        let playerPosition = inputPlayerPosition.split(" ").join("") + "Id"
        this.setState(prevState => ({
            teamPickData: {
                ...prevState.teamPickData,
                [playerPosition]: playerId,
                ["isSubmitted"]:false
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
    componentDidMount() {
        let data = sessionStorage.getItem("bitrulez")
        this.setState({
            bitrulez: data
        })
        // this.interval = setInterval(
        //     () => this.clocify(),
        //     1000
        // );
    }

    clocify() {
        // this.setState({
        //     nowDateAndTime: humanReadDateAndTime()
        // });
    }

    componentDidUpdate(prevProps, prevState) {    
        if (prevState.selectedDay !== this.state.selectedDay && this.state.showTeam){
            const calculatedPickData = checkEligibilityForPickTeam(this.state.fantasyUsers, this.state.bitrulez, this.state.selectedDay, this.state.nowDateAndTime, this.state.dropdowns[0].teamsByDay, this.state.basketballPlayers)
            this.setState ({
                teamPickData:calculatedPickData.teamPickData,
                teamPickLockData:calculatedPickData.teamPickLockData,
            })
        }
    }
    
            // if (prevState.teamPickData !== this.state.teamPickData) {
    
            //     })




        // if (prevState.selectedDay !== this.state.selectedDay && this.state.showTeam) {
        //     const userData = this.state.fantasyUsers.filter((user) => {
        //         if (user.username === this.state.bitrulez) {
        //             return user
        //         }
        //     })
        //     const teamPickData = {
        //         Player1Id: userData[0][this.state.selectedDay].Player1Id,
        //         Player2Id: userData[0][this.state.selectedDay].Player2Id,
        //         Player3Id: userData[0][this.state.selectedDay].Player3Id,
        //         Player4Id: userData[0][this.state.selectedDay].Player4Id,
        //         Player5Id: userData[0][this.state.selectedDay].Player5Id,
        //         Player6Id: userData[0][this.state.selectedDay].Player6Id,
        //         Player7Id: userData[0][this.state.selectedDay].Player7Id,
        //     }
        //     let allPlayersArePickedCounter = 0
        //     const teamPickPlayersIds = ["Player1Id", "Player2Id", "Player3Id", "Player4Id", "Player5Id", "Player6Id", "Player7Id"]
        //     teamPickPlayersIds.forEach((plyerId) => {
        //         if (teamPickData[plyerId] !== null) {
        //             allPlayersArePickedCounter++
        //         }
        //     })
        //     const selectedDayFirstMatch = this.state.selectedDay + "--first-match"
        //     const selectedDayFirstMatchTime = this.state.dropdowns[0].teamsByDay[selectedDayFirstMatch]
        //     const nowHour = this.state.nowDateAndTime.humanTime.split(":")[0]
        //     const nowMinutes = this.state.nowDateAndTime.humanTime.split(":")[1]
        //     const firstMatchHour = selectedDayFirstMatchTime.split(":")[0]
        //     const firstMatchMinutes = selectedDayFirstMatchTime.split(":")[1]
        //     if (allPlayersArePickedCounter === 7) {

        //         if (nowHour < firstMatchHour) {
        //             this.setState({
        //                 teamPickData,
        //                 teamPickIsLocked: true,
        //                 teamPickDataIsSubmitted: true
        //             })

        //         } else if (nowHour === firstMatchHour && nowMinutes < firstMatchMinutes) {
        //             this.setState({
        //                 teamPickData,
        //                 teamPickIsLocked: true,
        //                 teamPickDataIsSubmitted: true
        //             })
        //         } else {
        //             this.setState({
        //                 teamPickData,
        //             })
        //         }
        //     }
        // }
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
                pickPlayerForTeam: this.pickPlayerForTeam,
                depositUserKey: this.depositUserKey,
                teamPickIsSubmitted: this.teamPickIsSubmitted,
            }}>

                {this.props.children}
            </AppContext.Provider >
        )
    }
}