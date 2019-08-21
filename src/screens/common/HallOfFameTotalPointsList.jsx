import React from 'react';
import { AppContext } from '../../screens/_context/AppContext';
import eligibleDays from "../../services/eligibleDays";
import checkEligibilityForPickTeam from "../../services/checkEligibilityForPickTeam";


class HallOfFameTotalPointsList extends React.Component {
    static contextType = AppContext;
    state = {
        fantasyUsersSorted: null
    }
    calculateAllUsers = () => {
        let output = null

        if (this.context.hallOfFameSelectedDay !== "all-days") {
            const fantasyUsersCalculatedPointsForOneDay = []
            this.context.fantasyUsers.forEach((user) => {
                const calculatedData = checkEligibilityForPickTeam(this.context.fantasyUsers, user.username, this.context.hallOfFameSelectedDay, this.context.nowDateAndTime, this.context.dropdowns[0].teamsByDay, this.context.basketballPlayers)
                const userData = {
                    username: user.username,
                    summaSummarum: calculatedData.totalSummaSummarum,
                    teamPickIds: calculatedData.teamPickData
                }
                fantasyUsersCalculatedPointsForOneDay.push(userData)
            })
            output = fantasyUsersCalculatedPointsForOneDay
            if (output !== null) {
                output.sort(function (a, b) {
                    return b.summaSummarum - a.summaSummarum
                })
            }
        } else {
            const fantasyUsersCalculatedPointsForAllDays = []
            this.context.fantasyUsers.forEach((user) => {
                const calculatedPointsForOneUser = {
                    username: user.username,
                    summaSummarum: 0,
                    data: []
                }
                eligibleDays.forEach((day) => {
                    const calculatedData = checkEligibilityForPickTeam(this.context.fantasyUsers, user.username, day, this.context.nowDateAndTime, this.context.dropdowns[0].teamsByDay, this.context.basketballPlayers)
                    const userData = {
                        roundDate: day,
                        totalDaySummaSummarum: calculatedData.totalSummaSummarum,
                        teamPickIds: calculatedData.teamPickData
                    }
                    calculatedPointsForOneUser.data.push(userData)
                    calculatedPointsForOneUser.summaSummarum = !isNaN(parseFloat(calculatedData.totalSummaSummarum)) ? calculatedPointsForOneUser.summaSummarum + parseFloat(calculatedData.totalSummaSummarum) : calculatedPointsForOneUser.summaSummarum
                })
                fantasyUsersCalculatedPointsForAllDays.push(calculatedPointsForOneUser)
            })
            output = fantasyUsersCalculatedPointsForAllDays
            if (output !== null) {
                output.sort(function (a, b) {
                    return b.summaSummarum - a.summaSummarum
                })
            }
        }
        this.setState({
            fantasyUsersSorted: output
        })
    }



    mapPlebs = () => {
        const output = []
        const fantasyUsers = this.state.fantasyUsersSorted
        for (let i = 10; i < fantasyUsers.length; i++) {
            const outputElement =
                <tr>
                    <td>{i}</td>
                    <td>{fantasyUsers[i].username}</td>
                    <td>{fantasyUsers[i].summaSummarum}</td>
                </tr>

            output.push(outputElement)
        }
        return output
    }
    checkIsPlebseView = () => {
        return this.state.fantasyUsersSorted[10].summaSummarum == 0 ? false : true
    }
    componentDidMount() {
        this.calculateAllUsers()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.selectedDay !== this.props.selectedDay) {
            this.calculateAllUsers()
        }
    }
    render() {
        return (
            <>
                {this.state.fantasyUsersSorted &&
                    <div className="hall-of-fame-total-points-list-container">
                        <div className="sticky-container d-flex flex-column align-items-center">
                            <div className="first-place-wrapper d-flex align-items-center">
                                <div className="user-order-no">
                                    &#8544;
                             </div>
                                <div className="d-flex flex-column justify-content-between">
                                    <div className="top">
                                        <i>Username:</i> {this.state.fantasyUsersSorted[0].summaSummarum == 0 ? "Placeholder for you" : this.state.fantasyUsersSorted[0].username}
                                    </div>
                                    <div className="bottom">
                                        <i>TD Fantasy points:</i> {this.state.fantasyUsersSorted[0].summaSummarum == 0 ? "1,000,000" : this.state.fantasyUsersSorted[0].summaSummarum}<sup>pt</sup>
                                    </div>
                                </div>
                                <div className="silhouette-wrapper">
                                    <img className="img-fluid" src={require("../../images/winner.png")} alt="triumph" />
                                </div>
                            </div>

                            <div className=" d-flex justify-content-between align-items-center w-100">
                                <div className="not-first-place-wrapper d-flex align-items-center second-to-show">
                                    <div className="user-order-no">
                                        &#8545;
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[1].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[1].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[1].summaSummarum}<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[1].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/boywinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center third-to-show">
                                    <div className="user-order-no">
                                        &#8546;
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[2].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[2].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[2].summaSummarum}<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[2].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/boywinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center fourth-to-show">
                                    <div className="user-order-no">
                                        &#8547;
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[3].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[3].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[3].summaSummarum}<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[3].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/boywinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                            </div>



                            <div className=" d-flex justify-content-between align-items-center w-100">
                                <div className="not-first-place-wrapper d-flex align-items-center fifth-to-show">
                                    <div className="user-order-no">
                                        &#8548;
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[4].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[4].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[4].summaSummarum}<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[4].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/boywinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center sixth-to-show">
                                    <div className="user-order-no">
                                        &#8549;
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[5].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[5].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[5].summaSummarum}<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[5].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/boywinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center seventh-to-show">
                                    <div className="user-order-no">
                                        &#8550;
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[6].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[6].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[6].summaSummarum}<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[6].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/boywinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                            </div>





                            <div className=" d-flex justify-content-between align-items-center w-100">
                                <div className="not-first-place-wrapper d-flex align-items-center eight-to-show">
                                    <div className="user-order-no">
                                        &#8551;
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[7].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[7].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[7].summaSummarum}<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[7].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/boywinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center ninth-to-show">
                                    <div className="user-order-no">
                                        &#8552;
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[8].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[8].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[8].summaSummarum}<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[8].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/boywinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center tenth-to-show">
                                    <div className="user-order-no">
                                        &#8553;
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[9].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[9].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[9].summaSummarum}<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[9].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/boywinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.checkIsPlebseView() &&
                            <div className="plebs-container">
                                <div className="plebse-title">------------------------- SCROLL DOWN TO SEE REST OF PLEBSE -------------------------</div>

                                <table>
                                    <thead className="w-100">
                                        <tr className="w-100">
                                            <th className="orer-no">Order No.</th>
                                            <th>Username</th>
                                            <th className="td-points">TD Fantasy points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.mapPlebs()}
                                    </tbody>
                                </table>
                            </div>
                        }
                        {!this.checkIsPlebseView() &&
                            <div className="plebse-title">------------------------- THERE IS NO DATA YET -------------------------</div>
                        }


                    </div>
                }
            </>
        )
    }
}

export default HallOfFameTotalPointsList