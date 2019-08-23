import React from 'react';
import { Route, Switch } from 'react-router-dom'
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import HallOfFameScreen from './screens/HallOfFameScreen';


import './App.scss';

function App() {
  return (
    <div className="app-screen-container">
      <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <Route exact path='/user-screen' component={UserScreen} />
        <Route exact path='/hall-of-fame' component={HallOfFameScreen} />
      </Switch>
    </div>
  );
}

export default App;
