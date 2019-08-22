import React from 'react';
import { AppContext } from '../_context/AppContext';
import checkEligibilityForPickTeam from "../../services/checkEligibilityForPickTeam";

class HallOfFameF1WCList extends React.Component {
    static contextType = AppContext;
    state = {
        fantasyF1WCUsersSorted: null
    }


    sortF1WCUsers = () => {
        let outputCalculated = []
        if (this.context.hallOfFameSelectedDay !== "all-days") {
            let outputNotCalculatet = null
            const fantasyUsersF1WCforOneDay = []
            this.context.fantasyUsers.forEach((user) => {
                const calculatedData = checkEligibilityForPickTeam(this.context.fantasyUsers, user.username, this.context.hallOfFameSelectedDay, this.context.nowDateAndTime, this.context.dropdowns[0].teamsByDay, this.context.basketballPlayers)
                const userData = {
                    username: user.username,
                    summaSummarum: calculatedData.totalSummaSummarum,
                    teamPickIds: calculatedData.teamPickData,
                }
                fantasyUsersF1WCforOneDay.push(userData)
            })
            outputNotCalculatet = fantasyUsersF1WCforOneDay
            if (outputNotCalculatet !== null) {
                outputNotCalculatet.sort(function (a, b) {
                    return b.summaSummarum - a.summaSummarum
                })
                for (let i = 0; i < 10; i++) {
                    if (outputNotCalculatet[i].summaSummarum != 0) {

                        switch (i) {
                            case 0:
                                outputNotCalculatet[i]["f1wcPoints"] = 25
                                break;
                            case 1:
                                outputNotCalculatet[i]["f1wcPoints"] = 18
                                break;
                            case 2:
                                outputNotCalculatet[i]["f1wcPoints"] = 15
                                break;
                            case 3:
                                outputNotCalculatet[i]["f1wcPoints"] = 12
                                break;
                            case 4:
                                outputNotCalculatet[i]["f1wcPoints"] = 10
                                break;
                            case 5:
                                outputNotCalculatet[i]["f1wcPoints"] = 8
                                break;
                            case 6:
                                outputNotCalculatet[i]["f1wcPoints"] = 6
                                break;
                            case 7:
                                outputNotCalculatet[i]["f1wcPoints"] = 4
                                break;
                            case 8:
                                outputNotCalculatet[i]["f1wcPoints"] = 2
                                break;
                            case 9:
                                outputNotCalculatet[i]["f1wcPoints"] = 1
                                break;
                        }
                        outputCalculated.push(outputNotCalculatet[i])
                    }
                }
                console.log(outputCalculated)
            }
        }
        // this.setState({
        //     fantasyF1WCUsersSorted: outputCalculated
        // })
    }

    componentDidMount() {
        this.sortF1WCUsers()
        this.props.clearSearchValue()
    }


    render() {
        this.sortF1WCUsers()
        return (
            <>
                <div className="hall-of-fame-f1wc-list-container">
                    <div className="hall-of-fame-f1wc-list-wrapper">


                        {/* --------FIRST PLACE-------- */}
                        <div className="first-place-container">
                            <div className="image-wrapper">
                                <img className="img-fluid" src={require("../../images/winner.png")} alt="triumph" />
                            </div>
                            <div className="info-wrapper d-flex">
                                <div className="position-no">
                                    &#8544;
                                </div>
                                <div className="titles-wrapper d-flex flex-column justify-content-between">
                                    <div className="top">
                                        Test Username 12 XXX
                                    </div>
                                    <div className="bottom">
                                        xx 25<sup>pt</sup>
                                    </div>
                                </div>
                            </div>
                            <div className="title">
                                Fantasy Grand Master
                            </div>
                        </div>



                        <div className="d-flex second-third-container">
                            {/* --------SECOND PLACE-------- */}
                            <div className="second-place-container">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={require("../../images/boybig.png")} alt="triumph" />
                                </div>
                                <div className="info-wrapper d-flex">
                                    <div className="position-no">
                                        &#8545;
                                </div>
                                    <div className="titles-wrapper d-flex flex-column justify-content-between">
                                        <div className="top">
                                            Test Username 10 XXX
                                    </div>
                                        <div className="bottom">
                                            xx 18<sup>pt</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                    Ruler of Ignorants
                            </div>
                            </div>


                            {/* --------THIRD PLACE-------- */}
                            <div className="third-place-container">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={require("../../images/boybig.png")} alt="triumph" />
                                </div>
                                <div className="info-wrapper d-flex">
                                    <div className="position-no">
                                        &#8546;
                                </div>
                                    <div className="titles-wrapper d-flex flex-column justify-content-between">
                                        <div className="top">
                                            Test Username 4 XXX
                                    </div>
                                        <div className="bottom">
                                            xx 15<sup>pt</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                    Slayer of Noobs
                            </div>
                            </div>
                        </div>





                        <div className="chosen-few-container row w-100 m-0">

                            <div className="chosen-one-container">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={require("../../images/boysmall.png")} alt="triumph" />
                                </div>
                                <div className="info-wrapper d-flex">
                                    <div className="position-no">
                                        4.
                                </div>
                                    <div className="titles-wrapper d-flex flex-column justify-content-between">
                                        <div className="top">
                                            Test Username 24 XXX
                                    </div>
                                        <div className="bottom">
                                            xx 12<sup>pt</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                   <i>I'm special...</i>
                            </div>
                            </div>

                            <div className="chosen-one-container">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={require("../../images/boysmall.png")} alt="triumph" />
                                </div>
                                <div className="info-wrapper d-flex">
                                    <div className="position-no">
                                        5.
                                </div>
                                    <div className="titles-wrapper d-flex flex-column justify-content-between">
                                        <div className="top">
                                            Test Username 24 XXX
                                    </div>
                                        <div className="bottom">
                                            xx 10<sup>pt</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                   <i>I'm special...</i>
                            </div>
                            </div>


                            <div className="chosen-one-container">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={require("../../images/boysmall.png")} alt="triumph" />
                                </div>
                                <div className="info-wrapper d-flex">
                                    <div className="position-no">
                                        6.
                                </div>
                                    <div className="titles-wrapper d-flex flex-column justify-content-between">
                                        <div className="top">
                                            Test Username 24 XXX
                                    </div>
                                        <div className="bottom">
                                            xx 8<sup>pt</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                   <i>I'm special...</i>
                            </div>
                            </div>


                            <div className="chosen-one-container">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={require("../../images/boysmall.png")} alt="triumph" />
                                </div>
                                <div className="info-wrapper d-flex">
                                    <div className="position-no">
                                        7.
                                </div>
                                    <div className="titles-wrapper d-flex flex-column justify-content-between">
                                        <div className="top">
                                            Test Username 24 XXX
                                    </div>
                                        <div className="bottom">
                                            xx 6<sup>pt</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                   <i>I'm special...</i>
                            </div>
                            </div>


                            <div className="chosen-one-container">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={require("../../images/boysmall.png")} alt="triumph" />
                                </div>
                                <div className="info-wrapper d-flex">
                                    <div className="position-no">
                                        8.
                                </div>
                                    <div className="titles-wrapper d-flex flex-column justify-content-between">
                                        <div className="top">
                                            Test Username 24 XXX
                                    </div>
                                        <div className="bottom">
                                            xx 4<sup>pt</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                   <i>I'm special...</i>
                            </div>
                            </div>


                            <div className="chosen-one-container">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={require("../../images/boysmall.png")} alt="triumph" />
                                </div>
                                <div className="info-wrapper d-flex">
                                    <div className="position-no">
                                        9.
                                </div>
                                    <div className="titles-wrapper d-flex flex-column justify-content-between">
                                        <div className="top">
                                            Test Username 24 XXX
                                    </div>
                                        <div className="bottom">
                                            xx 2<sup>pt</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                   <i>I'm special...</i>
                            </div>
                            </div>


                            <div className="chosen-one-container">
                                <div className="image-wrapper">
                                    <img className="img-fluid" src={require("../../images/boysmall.png")} alt="triumph" />
                                </div>
                                <div className="info-wrapper d-flex">
                                    <div className="position-no">
                                        10.
                                </div>
                                    <div className="titles-wrapper d-flex flex-column justify-content-between">
                                        <div className="top">
                                            Test Username 24 XXX
                                    </div>
                                        <div className="bottom">
                                            xx 1<sup>pt</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="title">
                                    {/* PITAJ DA LI JE POSLEDNJI */}
                                    <i>I'm special...</i>
                                </div>
                            </div>









                        </div>
                        {/* <div>The chosen few</div> */}
                    </div>
                </div>

            </>

        )
    }
}

export default HallOfFameF1WCList