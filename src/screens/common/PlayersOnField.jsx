import React from 'react';
import { AppContext } from '../_context/AppContext';

class PlayersOnField extends React.Component {
    static contextType = AppContext;
    state = {}

    choosePlayer = (event) => {
        const playerPosition = event.target.getAttribute("data-player-position")
        this.context.choosePlayerForTeam(playerPosition)
    }

    mapPlayersOnField = () => {

    }
    render() {
        return (
            <div className="show-players-on-field-container d-flex flex-column justify-content-between">
                <div className="screen-title d-flex justify-content-around">
                    <span>{"XXX"}'s Team for {this.context.selectedDay}</span>
                    <span>You need to pick all 7 players in order to be able to submit team for round</span>
                </div>
                <section className="picked-players-container d-flex flex-column justify-content-between">
                    <div className="three-players-container d-flex justify-content-around">
                        <div className="first-five-player-wrapper" data-player-position="Player 1" onClick={this.choosePlayer}>
                            <div className="not-selected-player" data-player-position="Player 1">
                                <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-1.png")} alt="player 1" data-player-position="Player 1"/>
                                <div className="pick-player-title" data-player-position="Player 1">Pick player 1</div>
                            </div>
                        </div>
                        <div className="first-five-player-wrapper" data-player-position="Player 2" onClick={this.choosePlayer}>
                            <div className="not-selected-player" data-player-position="Player 2">
                                <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-2.png")} alt="player 1" data-player-position="Player 2"/>
                                <div className="pick-player-title" data-player-position="Player 2">Pick player 2</div>
                            </div>
                        </div>
                        <div className="first-five-player-wrapper" data-player-position="Player 3" onClick={this.choosePlayer}>
                            <div className="not-selected-player" data-player-position="Player 3">
                                <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-3.png")} alt="player 1" data-player-position="Player 3"/>
                                <div className="pick-player-title" data-player-position="Player 3">Pick player 3</div>
                            </div>
                        </div>
                    </div>
                    <div className="two-players-container d-flex justify-content-around">
                        <div className="first-five-player-wrapper" data-player-position="Player 4" onClick={this.choosePlayer}>
                            <div className="not-selected-player" data-player-position="Player 4">
                                <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-4.png")} alt="player 1" data-player-position="Player 4"/>
                                <div className="pick-player-title" data-player-position="Player 4">Pick player 4</div>
                            </div>
                        </div>
                        <div className="first-five-player-wrapper" data-player-position="Player 5" onClick={this.choosePlayer}>
                            <div className="not-selected-player" data-player-position="Player 5">
                                <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-5.png")} alt="player 1" data-player-position="Player 5"/>
                                <div className="pick-player-title" data-player-position="Player 5">Pick player 5</div>
                            </div>
                        </div>
                    </div>
                    <div className="bench-players-container d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="bench-player-wrapper" data-player-position="Player 6" onClick={this.choosePlayer}>
                                <div className="not-selected-player-b-1" data-player-position="Player 6">
                                    <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-6.png")} alt="player 1" data-player-position="Player 6"/>
                                    <div className="pick-player-title" data-player-position="Player 6">Pick player 6</div>
                                </div>
                            </div>
                            <div className="bench-player-wrapper" data-player-position="Player 7" onClick={this.choosePlayer}>
                                <div className="not-selected-player-b-2" data-player-position="Player 7">
                                    <img className="img-fluid" src={require("../../images/basketballPlayers/basketball-player-7.png")} alt="player 1" data-player-position="Player 7"/>
                                    <div className="pick-player-title" data-player-position="Player 7">Pick player 7</div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-success align-self-end" disabled>That's it! I'm ready to go</button>
                    </div>
                </section>
                <table className="points-container">
                    <thead>
                        <tr className="">
                            <th>FIRST FIVE TOTAL</th>
                            <th>Assists</th>
                            <th>Rebounds</th>
                            <th>Blocks</th>
                            <th>Steals</th>
                            <th>Turnovers</th>
                            <th>Free throws</th>
                            <th>FT bonuses</th>
                            <th>FT penalties</th>
                            <th>Two points</th>
                            <th>2pt bonuses</th>
                            <th>2pt penalties</th>
                            <th>Three points</th>
                            <th>3pt bonuses</th>
                            <th>3pt penalties</th>
                        </tr>
                    </thead>
                    <tbody className="players-data-container">
                        <tr>
                            <th>
                                Real life
                          </th>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td></td>
                            <td></td>
                            <td>23</td>
                            <td></td>
                            <td></td>
                            <td>23</td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <th>
                                Fantasy points
                          </th>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                            <td>23</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PlayersOnField