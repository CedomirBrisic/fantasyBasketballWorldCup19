import React from 'react';
import { Link } from 'react-router-dom'
import { AppContext } from '../_context/AppContext';
import TotalWCPointsByDay from './TotalPointsByDay';



class Header extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div className="header-container d-flex justify-content-between align-items-center">
                <div className="username-wrapper">
                    <i>username:</i>
                    <span>{this.context.bitrulez}</span>
                </div>
                <div className="d-flex">
                <TotalWCPointsByDay />
                </div>
                <Link className="hall-of-fame-wrapper" to={`hall-of-fame`}>
                    Hall of Fame
                </Link>
            </div>
        )
    }
}

export default Header