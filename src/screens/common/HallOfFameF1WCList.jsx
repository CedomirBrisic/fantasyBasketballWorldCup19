import React from 'react';
import { AppContext } from '../_context/AppContext';

class HallOfFameF1WCList extends React.Component {
    static contextType = AppContext;
    state = {

    }


    render() {
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
                                    He is special !
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
                                    He is special !
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
                                    He is special !
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
                                    He is special !
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
                                    He is special !
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
                                    He is special !
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
                                    He is special !
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