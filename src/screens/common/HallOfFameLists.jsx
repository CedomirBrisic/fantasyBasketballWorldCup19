import React from 'react';
import HallOfFameF1WCList from './HallOfFameF1WCList';
import HallOfFameTotalPointsList from './HallOfFameTotalPointsList';



class HallOfFameLists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <h1 className="hall-of-fame-lists-container">
                Hello from HallOfFameLists Component
                <HallOfFameF1WCList />
                <HallOfFameTotalPointsList />
            </h1>
        )
    }
}

export default HallOfFameLists


