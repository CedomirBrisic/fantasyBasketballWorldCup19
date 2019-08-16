import React from 'react';
import { AppContext } from '../screens/_context/AppContext';
import HallOfFameLists from './common/HallOfFameLists';
import HallOfFameUserStats from './common/HallOfFameUserStats';




class HallOfFameScreen extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div className="hall-of-fame-screen-container">
               
                {/* <HallOfFameLists />
                <HallOfFameUserStats /> */}
            </div>
        )
    }
}

export default HallOfFameScreen