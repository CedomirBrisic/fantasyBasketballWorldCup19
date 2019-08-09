import React from 'react';
import { Route, Switch } from 'react-router-dom'



import WelcomeScreen from './screens/WelcomeScreen';
// import AdminScreen from './screens/AdminScreen';
import UserScreen from './screens/UserScreen';
// import HallOfFameScreen from './screens/HallOfFameScreen';


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
        {/* <PlayersOnField /> */}
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
