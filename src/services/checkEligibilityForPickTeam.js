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

    const teamPickLockData = {
        Player1Id: null,
        Player2Id: null,
        Player3Id: null,
        Player4Id: null,
        Player5Id: null,
        Player6Id: null,
        Player7Id: null,
    }
    const possiblePlayerIds = ["Player1Id", "Player2Id", "Player3Id", "Player4Id", "Player5Id", "Player6Id", "Player7Id"]

    if (teamPickData.isSubmitted) {
        possiblePlayerIds.forEach((playerId) => {
            const playerData = basketballPlayers.filter((player) => {
                if (player._id.$oid === teamPickData[playerId]) {
                    return player
                }
            })
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


    const outputObject = {
        teamPickData,
        teamPickLockData
    }
    return outputObject
}

export default checkEligibilityForPickTeam;