import React from 'react';
import HallOfFameUserStatsF1WC from './HallOfFameUserStatsF1WC';
import HallOfFameUserStatsTotalPoints from './HallOfFameUserStatsTotalPoints';



class HallOfFameUserStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <h1 className="hall-of-fame-user-stats-container">
                Hello from HallOfFameUserStats Component
                <HallOfFameUserStatsF1WC />
                <HallOfFameUserStatsTotalPoints />
            </h1>
        )
    }
}

export default HallOfFameUserStats