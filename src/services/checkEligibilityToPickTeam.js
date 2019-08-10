// const checkEligibilityToPickTeam = () => {
//     const selectedDay = this.context.selectedDay
//     const nowDateAndTime = this.context.nowDateAndTime


//     if (selectedDay === nowDateAndTime.humanDate) {
//                     const teamHour = parseInt(team.gameStart.split(":")[0])
//                     const teamMinutes = parseInt(team.gameStart.split(":")[1])
//                     const nowHour = parseInt(this.context.nowDateAndTime.humanTime.split(":")[0])
//                     const nowMinutes = parseInt(this.context.nowDateAndTime.humanTime.split(":")[1])
//                     if (nowHour > teamHour) {
//                         isEligible = false
//                     } else if (nowHour === teamHour) {
//                         if (nowMinutes > teamMinutes) {
//                             isEligible = false
//                         }
//                     }

// }

// export default checkEligibilityToPickTeam;



// // if (Array.isArray(this.context.dropdowns[0].teamsByDay[selectedDay])) {
// //     return this.context.dropdowns[0].teamsByDay[selectedDay].map((team, index) => {
// //         let isEligible = true
// //         if (selectedDay === this.context.nowDateAndTime.humanDate) {
// //             const teamHour = parseInt(team.gameStart.split(":")[0])
// //             const teamMinutes = parseInt(team.gameStart.split(":")[1])
// //             const nowHour = parseInt(this.context.nowDateAndTime.humanTime.split(":")[0])
// //             const nowMinutes = parseInt(this.context.nowDateAndTime.humanTime.split(":")[1])
// //             if (nowHour > teamHour) {
// //                 isEligible = false
// //             } else if (nowHour === teamHour) {
// //                 if (nowMinutes > teamMinutes) {
// //                     isEligible = false
// //                 }
// //             }
// //         } else {
// //             const possibleMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// //             if (possibleMonths.indexOf(selectedDay.split("-")[1]) < possibleMonths.indexOf(this.context.nowDateAndTime.humanDate.split("-")[1])) {
// //                 isEligible = false
// //             } else if (possibleMonths.indexOf(selectedDay.split("-")[1]) === possibleMonths.indexOf(this.context.nowDateAndTime.humanDate.split("-")[1])) {
// //                 if (selectedDay.split("-")[0].length < this.context.nowDateAndTime.humanDate.split("-")[0].length) {
// //                     isEligible = false
// //                 } else if (selectedDay.split("-")[0].length === this.context.nowDateAndTime.humanDate.split("-")[0].length && selectedDay.split("-")[0].length === 3) {
// //                     if (selectedDay.split("-")[0][0] < this.context.nowDateAndTime.humanDate.split("-")[0][0]) {
// //                         isEligible = false
// //                     }
// //                 } else if (selectedDay.split("-")[0].length === this.context.nowDateAndTime.humanDate.split("-")[0].length && selectedDay.split("-")[0].length === 4) {
// //                     let selectedDayNumber = parseInt(selectedDay.split("-")[0][0] + selectedDay.split("-")[0][1], 10)
// //                     let nowDateNumber = parseInt(this.context.nowDateAndTime.humanDate.split("-")[0][0] + this.context.nowDateAndTime.humanDate.split("-")[0][1], 10)
// //                     if (selectedDayNumber < nowDateNumber) {
// //                         isEligible = false
// //                     }
// //                 }
// //             }
// //         }