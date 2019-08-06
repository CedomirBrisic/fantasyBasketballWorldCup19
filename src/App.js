import React from 'react';
import { Route, Switch } from 'react-router-dom'
import F1WCPointsByDay from './screens/common/F1WCPointsByDay';
import TotalPointsByDay from './screens/common/TotalPointsByDay';
import Header from './screens/common/Header';
import DashboardSelectDay from './screens/common/DashboardSelectDay';
import SingleMatchSet from './screens/common/SingleMatchSet';
import DashboardSelectTeam from './screens/common/DashboardSelectTeam';
import ShowPlayersOnField from './screens/common/ShowPlayersOnField';
import SelectPlayer from './screens/common/SelectPlayer';
// import PlayerCardModal from './screens/common/PlayerCardModal';
import HallOfFameF1WCList from './screens/common/HallOfFameF1WCList';
import HallOfFameTotalPointsList from './screens/common/HallOfFameTotalPointsList';
import HallOfFameUserStatsF1WC from './screens/common/HallOfFameUserStatsF1WC';
import HallOfFameUserStatsTotalPoints from './screens/common/HallOfFameUserStatsTotalPoints';
import HallOfFameLists from './screens/common/HallOfFameLists';
import HallOfFameUserStats from './screens/common/HallOfFameUserStats';



import WelcomeScreen from './screens/WelcomeScreen';
import AdminScreen from './screens/AdminScreen';
import UserScreen from './screens/UserScreen';
import HallOfFameScreen from './screens/HallOfFameScreen';


import './App.scss';

function App() {
  return (
    <div className="app-screen-container">
      <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        {/* <Route exact path='/' component={WelcomeScreen} /> */}
        <Route exact path='/user-screen' component={UserScreen} />

        {/* <F1WCPointsByDay /> */} 
        {/* <TotalPointsByDay /> */}
        {/* <Header /> */}
        {/* <DashboardSelectDay /> */}
        {/* <SingleMatchSet /> */}
        {/* <DashboardSelectTeam /> */}
        {/* <AdminScreen /> */}
        {/* <ShowPlayersOnField /> */}
        {/* <SelectPlayer /> */}
        {/* <PlayerCardModal /> */}
        {/* <UserScreen /> */}
        {/* <HallOfFameF1WCList /> */}
        {/* <HallOfFameTotalPointsList /> */}
        {/* <HallOfFameUserStatsF1WC /> */}
        {/* <HallOfFameUserStatsTotalPoints /> */}
        {/* <HallOfFameLists /> */}
        {/* <HallOfFameUserStats /> */}
        {/* <HallOfFameScreen /> */}
      </Switch>
    </div>
  );
}

export default App;
