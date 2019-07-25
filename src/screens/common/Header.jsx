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
            <h1 className="header-container">
                Hello from Header Component
                <F1WCPointsByDay />
                <TotalWCPointsByDay />
            </h1>
        )
    }
}

export default Header