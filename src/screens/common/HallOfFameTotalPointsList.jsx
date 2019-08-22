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
                <tr key={fantasyUsers[i].username + i}>
                    <td className="orer-no">{i + 1}</td>
                    <td>{fantasyUsers[i].username}</td>
                    <td>{fantasyUsers[i].summaSummarum}</td>
                </tr>

            output.push(outputElement)
        }
        return output
    }

    mapSearched = () => {
        const output = []
        const fantasyUsers = this.state.fantasyUsersSorted
        const searchValue = this.props.searchValue.toLowerCase()
        for (let i = 0; i < fantasyUsers.length; i++) {
            if (fantasyUsers[i].username.toLowerCase().includes(searchValue)) {
                const outputElement =
                    <tr key={fantasyUsers[i].username + i}>
                        <td className="orer-no">{i + 1}</td>
                        <td>{fantasyUsers[i].username}</td>
                        <td>{fantasyUsers[i].summaSummarum}</td>
                    </tr>
                output.push(outputElement)
            }
        }
        return output
    }

    checkIsPlebseView = () => {
        return this.state.fantasyUsersSorted[10].summaSummarum == 0 ? false : true
    }
    componentDidMount() {
        this.props.clearSearchValue()
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
                    this.props.searchValue === "" &&
                    <div className="hall-of-fame-total-points-list-container">
                        <div className="hall-of-fame-total-points-list-wrapper d-flex flex-column align-items-center">
                            <div className="first-place-wrapper d-flex align-items-center">
                                <div className="user-order-no">
                                    1.
                             </div>
                                <div className="d-flex flex-column justify-content-between">
                                    <div className="top">
                                        <i>Username:</i> {this.state.fantasyUsersSorted[0].summaSummarum == 0 ? "Placeholder for you" : this.state.fantasyUsersSorted[0].username}
                                    </div>
                                    <div className="bottom">
                                        <i>TD Fantasy points:</i> {this.state.fantasyUsersSorted[0].summaSummarum == 0 ? "1,000,000" : this.state.fantasyUsersSorted[0].summaSummarum}<sup>pt</sup>
                                    </div>
                                    <div className="bottom-bottom">
                                        <i>F1WC Points:</i>25<sup>pt</sup>
                                    </div>
                                </div>
                                <div className="silhouette-wrapper">
                                    <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />
                                </div>
                            </div>

                            <div className=" d-flex justify-content-between align-items-center w-100">
                                <div className="not-first-place-wrapper d-flex align-items-center second-to-show">
                                    <div className="user-order-no">
                                        2.
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[1].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[1].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[1].summaSummarum}<sup>pt</sup>
                                        </div>
                                        <div className="bottom-bottom">
                                            18<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[1].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center third-to-show">
                                    <div className="user-order-no">
                                        3.
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[2].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[2].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[2].summaSummarum}<sup>pt</sup>
                                        </div>
                                        <div className="bottom-bottom">
                                            15<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[2].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center fourth-to-show">
                                    <div className="user-order-no">
                                        4.
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[3].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[3].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[3].summaSummarum}<sup>pt</sup>
                                        </div>
                                        <div className="bottom-bottom">
                                            12<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[3].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                            </div>



                            <div className=" d-flex justify-content-between align-items-center w-100">
                                <div className="not-first-place-wrapper d-flex align-items-center fifth-to-show">
                                    <div className="user-order-no">
                                        5.
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[4].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[4].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[4].summaSummarum}<sup>pt</sup>
                                        </div>
                                        <div className="bottom-bottom">
                                            10<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[4].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center sixth-to-show">
                                    <div className="user-order-no">
                                        6.
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[5].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[5].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[5].summaSummarum}<sup>pt</sup>
                                        </div>
                                        <div className="bottom-bottom">
                                            8<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[5].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center seventh-to-show">
                                    <div className="user-order-no">
                                        7.
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[6].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[6].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[6].summaSummarum}<sup>pt</sup>
                                        </div>
                                        <div className="bottom-bottom">
                                            6<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[6].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                            </div>


                            <div className=" d-flex justify-content-between align-items-center w-100">
                                <div className="not-first-place-wrapper d-flex align-items-center eight-to-show">
                                    <div className="user-order-no">
                                        8.
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[7].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[7].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[7].summaSummarum}<sup>pt</sup>
                                        </div>
                                        <div className="bottom-bottom">
                                            4<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[7].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center ninth-to-show">
                                    <div className="user-order-no">
                                        9.
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[8].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[8].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[8].summaSummarum}<sup>pt</sup>
                                        </div>
                                        <div className="bottom-bottom">
                                            2<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[8].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                                <div className="not-first-place-wrapper d-flex align-items-center tenth-to-show">
                                    <div className="user-order-no">
                                        10.
                                </div>
                                    <div className="d-flex flex-column justify-content-between">
                                        <div className="top">
                                            {this.state.fantasyUsersSorted[9].summaSummarum == 0 ? "Placeholder for your friend" : this.state.fantasyUsersSorted[9].username}
                                        </div>
                                        <div className="bottom">
                                            {this.state.fantasyUsersSorted[9].summaSummarum}<sup>pt</sup>
                                        </div>
                                        <div className="bottom-bottom">
                                            1<sup>pt</sup>
                                        </div>
                                    </div>
                                    <div className="silhouette-wrapper">
                                        {this.state.fantasyUsersSorted[9].summaSummarum == 0 ? "" : <img className="img-fluid" src={require("../../images/runnwinner.png")} alt="triumph" />}
                                    </div>
                                </div>
                            </div>

                            {this.checkIsPlebseView() &&
                                this.props.searchValue === "" &&
                                <div className="plebs-container">
                                    <div className="plebse-title">------------------------- SCROLL DOWN TO SEE REST OF PLEBSE -------------------------</div>

                                    <table>
                                        <thead className="w-100">
                                            <tr className="w-100">
                                                <th className="orer-no">Position No.</th>
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
                                this.props.searchValue === "" &&
                                <div className="plebs-container">
                                    <div className="plebse-title">------------------------- THERE IS NO DATA YET -------------------------</div>
                                </div>
                            }

                        </div>
                    </div>
                }
                {this.state.fantasyUsersSorted &&
                    this.props.searchValue !== "" &&
                    <div className="hall-of-fame-total-points-list-container">
                        <div className="hall-of-fame-total-points-list-wrapper d-flex flex-column align-items-center">
                            <div className="plebs-container">
                                <div className="plebse-title">------------------------- SEARCHED RESULTS -------------------------</div>
                                <table>
                                    <thead className="w-100">
                                        <tr className="w-100">
                                            <th className="orer-no">Position No.</th>
                                            <th>Username</th>
                                            <th className="td-points">TD Fantasy points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.mapSearched()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default HallOfFameTotalPointsList