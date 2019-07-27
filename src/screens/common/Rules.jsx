import React from 'react';


class Rules extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <section className="rules-container">
                <h3 className="d-flex justify-content-between align-items-center"><i>Rules</i><b>↓</b></h3>
                <h5><span className="rule-numer-order">#1 -</span> YOU <span className="first-do-not-talk">do not talk</span> about TD-Fantasy</h5>
                <h5><span className="rule-numer-order">#2 -</span> YOU <span className="second-do-not-talk">do not talk</span> about TD-Fantasy</h5>
                <h5><span className="rule-numer-order">#3 -</span> One day - One round (16 rounds total)</h5>
                <h5><span className="rule-numer-order">#4 -</span> You need to choose players for each round separately</h5>
                <h6><i>#4-a Choose them wisely</i></h6>
                <h5><span className="rule-numer-order">#5 -</span> Eligible players for choosing are only those who's teams have match on same day as TD-Fantasy round</h5>
                <h5><span className="rule-numer-order">#6 -</span> Only stats from <a href="http://www.fiba.basketball/basketballworldcup/2019" target="_blank">FIBA website</a> are relevant</h5>
                <h5><span className="rule-numer-order">#7 -</span> You can choose 7 players for each round, but only 5 of them (best ranked picks) counts for score</h5>
                <h6><i>#7-a If someone is injured and you picked him, or he didn't play and you picked him... it's not our fault- you need to learn how to live with that</i></h6>
                <h5><span className="rule-numer-order">#8 -</span> There are no restrictions in terms of choosing players (except rule #5)</h5>
                <h6><i>#8-a If you want 5 players to be from one national team and all of them to be players who plays on center position - nobody can forbid you!</i></h6>
                <h5><span className="rule-numer-order">#9 -</span> Winner of All Winners, Fantasy Grand Master, Ruler of Ignorants and Slayer of Newbies - you can become one, if on evening of 15th September 2019 you have most points at the Hall of Fame - F1WC Competition section</h5>
                <div className="d-flex justify-content-between buttons-container">
                <button type="button" className="btn btn-outline-dark">F1WC points calc</button>
                <button type="button" className="btn btn-outline-dark">Round points calc</button>
                </div>
            </section>
        )
    }
}

export default Rules