import React from 'react';
import DashboardSelectDay from './common/DashboardSelectDay';
import ShowPlayersOnField from './common/ShowPlayersOnField';
import SelectPlayer from './common/SelectPlayer';
import PlayerCardModal from './common/PlayerCardModal';
import DashboardSelectTeam from './common/DashboardSelectTeam';



class UserScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <h1 className="user-screen-container">
                Hello from UserScreen Component
                <DashboardSelectDay />
                <ShowPlayersOnField />
                vs
                <SelectPlayer />
                <PlayerCardModal />
                <DashboardSelectTeam />
            </h1>
        )
    }
}

export default UserScreen