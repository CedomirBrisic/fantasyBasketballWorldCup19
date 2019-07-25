import React from 'react';
import DashboardSelectDay from './common/DashboardSelectDay';
import SingleMatchSet from './common/SingleMatchSet';
import DashboardSelectTeam from './common/DashboardSelectTeam';



class AdminScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <h1 className="admin-screen-container">
                Hello from AdminScreen Component
                <DashboardSelectDay />
                <SingleMatchSet />
                <DashboardSelectTeam />
            </h1>
        )
    }
}

export default AdminScreen