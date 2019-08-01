import React from 'react';
import F1WCPointsByDay from './F1WCPointsByDay';
import TotalWCPointsByDay from './TotalPointsByDay';



class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="header-container d-flex justify-content-around">
                USERNAME
                <F1WCPointsByDay />
                <TotalWCPointsByDay />
            </div>
        )
    }
}

export default Header