import React from 'react';
import { AppContext } from '../../screens/_context/AppContext';

class SelectPlayer extends React.Component {
    static contextType = AppContext;
    // selectedTeam
    // basketballPlayers
    render() {
        return (
            <section className="select-player-container d-flex flex-column">
                {this.context.selectedTeam &&
                    this.context.selectedTeam !== "all-eligible-teams" &&
                    <a href={`http://www.fiba.basketball/basketballworldcup/2019/team/${this.context.selectedTeam}`} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-light">{`Find out more about ${this.context.selectedTeam} national team`}</button></a>
                }

                <div className="clockify-wrapper">
                    {this.context.nowTime}
                </div>
            </section>
        )
    }
}

export default SelectPlayer