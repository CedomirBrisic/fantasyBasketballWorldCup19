import calculateBasketballPlayerTDFantasyPoints from "./calculateBasketballPlayerTDFantasyPoints";
const possiblePlayerIds = ["Player1Id", "Player2Id", "Player3Id", "Player4Id", "Player5Id", "Player6Id", "Player7Id"]

const checkEligibilityForPickTeam = (fantasyUsers, username, selectedDay, nowDateAndTime, teamsByDay, basketballPlayers) => {
    const userData = fantasyUsers.filter((user) => {
        if (user.username === username) {
            return user
        }
    })
    const teamPickData = {
        Player1Id: userData[0][selectedDay].Player1Id,
        Player2Id: userData[0][selectedDay].Player2Id,
        Player3Id: userData[0][selectedDay].Player3Id,
        Player4Id: userData[0][selectedDay].Player4Id,
        Player5Id: userData[0][selectedDay].Player5Id,
        Player6Id: userData[0][selectedDay].Player6Id,
        Player7Id: userData[0][selectedDay].Player7Id,
        isSubmitted: userData[0][selectedDay].isSubmitted,
    }

    const teamPickDataByPoints = [{
            playerObjectKey: "Player1Id",
            id: userData[0][selectedDay].Player1Id,
            summaSummarum: null
        },
        {
            playerObjectKey: "Player2Id",
            id: userData[0][selectedDay].Player2Id,
            summaSummarum: null
        },
        {
            playerObjectKey: "Player3Id",
            id: userData[0][selectedDay].Player3Id,
            summaSummarum: null
        },
        {
            playerObjectKey: "Player4Id",
            id: userData[0][selectedDay].Player4Id,
            summaSummarum: null
        },
        {
            playerObjectKey: "Player5Id",
            id: userData[0][selectedDay].Player5Id,
            summaSummarum: null
        },
        {
            playerObjectKey: "Player6Id",
            id: userData[0][selectedDay].Player6Id,
            summaSummarum: null
        },
        {
            playerObjectKey: "Player7Id",
            id: userData[0][selectedDay].Player7Id,
            summaSummarum: null
        },
    ]

    const teamPickLockData = {
        Player1Id: null,
        Player2Id: null,
        Player3Id: null,
        Player4Id: null,
        Player5Id: null,
        Player6Id: null,
        Player7Id: null,
    }

    if (teamPickData.isSubmitted) {
        possiblePlayerIds.forEach((playerId, index) => {
            const playerData = basketballPlayers.filter((player) => {
                if (player._id.$oid === teamPickData[playerId]) {
                    return player
                }
            })

            teamPickDataByPoints[index].summaSummarum = parseFloat(calculateBasketballPlayerTDFantasyPoints(playerData[0], selectedDay).summaSummarum)
            const playerTeam = playerData[0].team
            const teamData = teamsByDay[selectedDay].filter((team) => {
                if (team.name === playerTeam) {
                    return team
                }
            })

            const nowHour = parseInt(nowDateAndTime.humanTime.split(":")[0], 10)
            const nowMinutes = parseInt(nowDateAndTime.humanTime.split(":")[1], 10)
            const teamGameStartHour = parseInt(teamData[0].gameStart.split(":")[0], 10)
            const teamGameStartMinutes = parseInt(teamData[0].gameStart.split(":")[1], 10)

            let tooLate = null

            if (selectedDay === nowDateAndTime.humanDate) {
                if (nowHour > teamGameStartHour) {
                    teamPickLockData[playerId] = true
                } else if (nowHour === teamGameStartHour && nowMinutes >= teamGameStartMinutes) {
                    teamPickLockData[playerId] = true
                } else {
                    teamPickLockData[playerId] = false
                }
            } else {
                const possibleMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                if (possibleMonths.indexOf(selectedDay.split("-")[1]) < possibleMonths.indexOf(nowDateAndTime.humanDate.split("-")[1])) {
                    teamPickLockData[playerId] = true
                } else if (possibleMonths.indexOf(selectedDay.split("-")[1]) === possibleMonths.indexOf(nowDateAndTime.humanDate.split("-")[1])) {
                    if (selectedDay.split("-")[0].length < nowDateAndTime.humanDate.split("-")[0].length) {
                        teamPickLockData[playerId] = true
                    } else if (selectedDay.split("-")[0].length === nowDateAndTime.humanDate.split("-")[0].length && selectedDay.split("-")[0].length === 3) {
                        if (selectedDay.split("-")[0][0] < nowDateAndTime.humanDate.split("-")[0][0]) {
                            teamPickLockData[playerId] = true
                        }
                    } else if (selectedDay.split("-")[0].length === nowDateAndTime.humanDate.split("-")[0].length && selectedDay.split("-")[0].length === 4) {
                        let selectedDayNumber = parseInt(selectedDay.split("-")[0][0] + selectedDay.split("-")[0][1], 10)
                        let nowDateNumber = parseInt(nowDateAndTime.humanDate.split("-")[0][0] + nowDateAndTime.humanDate.split("-")[0][1], 10)
                        if (selectedDayNumber < nowDateNumber) {
                            teamPickLockData[playerId] = true
                        }
                    }
                }
            }
        })
    }

    teamPickDataByPoints.sort(function (a, b) {
        return b.summaSummarum - a.summaSummarum
    })

    
    const teamPickDataByPointsIds = []
    teamPickDataByPoints.forEach((player) => {
        if (!!player.summaSummarum){
            teamPickDataByPointsIds.push(player)
        }
    })
    teamPickDataByPoints.forEach((player) => {
        if (!player.summaSummarum){
            teamPickDataByPointsIds.push(player)
        }
    })
console.log(teamPickDataByPointsIds)

    const outputTeamPickData = {
        Player1Id: teamPickDataByPointsIds[0].id,
        Player2Id: teamPickDataByPointsIds[1].id,
        Player3Id: teamPickDataByPointsIds[2].id,
        Player4Id: teamPickDataByPointsIds[3].id,
        Player5Id: teamPickDataByPointsIds[4].id,
        Player6Id: teamPickDataByPointsIds[5].id,
        Player7Id: teamPickDataByPointsIds[6].id,
        isSubmitted: teamPickData.isSubmitted,
    }

    const outputTeamPickLockData = {
        Player1Id: teamPickLockData[teamPickDataByPointsIds[0].playerObjectKey],
        Player2Id: teamPickLockData[teamPickDataByPointsIds[1].playerObjectKey],
        Player3Id: teamPickLockData[teamPickDataByPointsIds[2].playerObjectKey],
        Player4Id: teamPickLockData[teamPickDataByPointsIds[3].playerObjectKey],
        Player5Id: teamPickLockData[teamPickDataByPointsIds[4].playerObjectKey],
        Player6Id: teamPickLockData[teamPickDataByPointsIds[5].playerObjectKey],
        Player7Id: teamPickLockData[teamPickDataByPointsIds[6].playerObjectKey],
    }

    const outputObject = {
        teamPickData: outputTeamPickData,
        teamPickLockData: outputTeamPickLockData
        // teamPickData,
        // teamPickLockData
    }
    // console.log(outputTeamPickData, outputTeamPickLockData)
    return outputObject
}

export default checkEligibilityForPickTeam;

// items.sort(function (a, b) {
//     return a.value - b.value;
//   });

// calculateBasketballPlayerTDFantasyPoints = (inputPlayerData, cardSelectedDay) => {