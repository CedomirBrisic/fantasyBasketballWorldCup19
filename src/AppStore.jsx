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
        bitrulez2: null,

        showSelectDayDashboard: true,
        showSelectTeamDashboard: false,
        selectPlayerSearchValue: "",

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
        teamPickLockData: {
            Player1Id: null,
            Player2Id: null,
            Player3Id: null,
            Player4Id: null,
            Player5Id: null,
            Player6Id: null,
            Player7Id: null,
        },
        calculatedFirstFiveRealLifeStatsTotals: {
            gameWinsCounter: 0,
            assists: 0,
            rebounds: 0,
            blocks: 0,
            steals: 0,
            turnovers: 0,
            freeThrows: 0,
            twoPoints: 0,
            threePoints: 0,
        },
        calculatedFirstFiveFantasyPointsStatsTotals: {
            gameWins: 0,
            assists: 0,
            rebounds: 0,
            blocks: 0,
            steals: 0,
            turnovers: 0,
            freeThrows: 0,
            freeThrowsBonuses: 0,
            freeThrowsPenalties: 0,
            twoPoints: 0,
            twoPointsBonuses: 0,
            twoPointsPenalties: 0,
            threePoints: 0,
            threePointsBonuses: 0,
            threePointsPenalties: 0
        },
        teamPickDayTotal: null,

        userTotalRoundPoints: 0,
        userAvgRoundPointsPerGame: 0,

        isInitialLoading: true,

        hallOfFameSelectedDay: "all-days",
        isHallOfFame: false

    }
    depositIsHallOfFame = () => {
        this.setState({
            isHallOfFame: true
        })
    }
    depositIsNotHallOfFame = () => {
        this.setState({
            isHallOfFame: false
        })
    }
    depositHallOfFameSelectedDay = (dayToDeposit) => {
        if (dayToDeposit !== "all-days") {
            this.setState({
                hallOfFameSelectedDay: dayToDeposit,
                selectedDay: dayToDeposit
            })
        } else {
            this.setState({
                hallOfFameSelectedDay: dayToDeposit,
                selectedDay: "31st-August"
            })

        }
    }

    depositSelectPlayerSearchValue = (data) => {
        this.setState({
            selectPlayerSearchValue: data,
            selectedTeam: "all-eligible-teams"
        })
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
    depositUserKey = (data, data2) => {
        this.setState({
            bitrulez: data,
            bitrulez2: data2
        })
        sessionStorage.setItem("bitrulez", data)
        sessionStorage.setItem("bitrulez2", data2)
    }

    getFantasyDataContext = () => {
        getFantasyData("neKaRendOMSiFRaOdbAsaliBasbAsDostaKARAkterA123").then((response) => {

            let selectedDay = null
            const nowDate = humanReadDateAndTime().humanDate
            if (eligibleDays.indexOf(nowDate) !== -1) {
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
                ["isSubmitted"]: false
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
        if (playerName !== null && playerTeam !== null) {
            this.setState({
                selectedPlayerForPlayerCardModal: selectedPlayer[0],
                showPlayerCardModal: true
            })
        }
    }
    closeSinglePlayerModal = () => {
        this.setState({
            selectedPlayerForPlayerCardModal: null,
            showPlayerCardModal: false
        })
    }


    calculateUsersRoundPoints = () => {
        let roundsPlayed = null
        const dayIndex = eligibleDays.indexOf(this.state.nowDateAndTime.humanDate)
        if (dayIndex === -1 && this.state.nowDateAndTime.humanDate.split("-")[1] !== "August") {
            roundsPlayed = 16
        } else {
            roundsPlayed = eligibleDays.indexOf(this.state.nowDateAndTime.humanDate) + 1
        }

        let userTotalRoundPoints = 0;
        for (let i = 0; i < roundsPlayed; i++) {
            userTotalRoundPoints += parseFloat(checkEligibilityForPickTeam(this.state.fantasyUsers, this.state.bitrulez, eligibleDays[i], this.state.nowDateAndTime, this.state.dropdowns[0].teamsByDay, this.state.basketballPlayers).totalSummaSummarum)
        }
        this.setState({
            userTotalRoundPoints,
            userAvgRoundPointsPerGame: userTotalRoundPoints / roundsPlayed
        })
    }

    componentDidMount() {
        let data = sessionStorage.getItem("bitrulez")
        let data2 = sessionStorage.getItem("bitrulez2")
        this.setState({
            bitrulez: data,
            bitrulez2: data2,
        })

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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selectedDay !== this.state.selectedDay && this.state.showTeam) {
            const calculatedPickData = checkEligibilityForPickTeam(this.state.fantasyUsers, this.state.bitrulez, this.state.selectedDay, this.state.nowDateAndTime, this.state.dropdowns[0].teamsByDay, this.state.basketballPlayers)
            this.setState({
                teamPickData: calculatedPickData.teamPickData,
                teamPickLockData: calculatedPickData.teamPickLockData,
                teamPickDayTotal: calculatedPickData.totalSummaSummarum,
                calculatedFirstFiveRealLifeStatsTotals: calculatedPickData.calculatedFirstFiveRealLifeStatsTotals,
                calculatedFirstFiveFantasyPointsStatsTotals: calculatedPickData.calculatedFirstFiveFantasyPointsStatsTotals,
            })
        }

        if (prevState.dropdowns === null && this.state.dropdowns !== null) {
            this.calculateUsersRoundPoints()
        }
    }

    render() {
        return (
            <>
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
                    depositSelectPlayerSearchValue: this.depositSelectPlayerSearchValue,
                    depositHallOfFameSelectedDay: this.depositHallOfFameSelectedDay,
                    depositIsHallOfFame: this.depositIsHallOfFame,
                    depositIsNotHallOfFame: this.depositIsNotHallOfFame
                }}>

                    {this.props.children}
                </AppContext.Provider >
            </>
        )
    }
}