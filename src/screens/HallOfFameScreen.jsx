import React from 'react';
import HallOfFameLists from './common/HallOfFameLists';
import HallOfFameUserStats from './common/HallOfFameUserStats';




class HallOfFameScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <h1 className="hall-of-fame-screen-container">
                Hello from Hall of Fame screen
                <HallOfFameLists />
                <HallOfFameUserStats />
            </h1>
        )
    }
}

export default HallOfFameScreen