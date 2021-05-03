/* eslint-disable */
import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

/* Template */
import PaperShell from './Templates/PaperTemplate';
import ErrorShell from './Templates/ErrorTemplate';

/* Pages */
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LandingPage/LoginPage/LoginPage';
import RegisterPage from './LandingPage/RegisterPage/RegisterPage';
import GamePage from './GamePage/GamePage';
import Error404 from './ErrorPage/Error404';

export default function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <Switch location={location}>
        <Route path="/" exact component={() => PaperShell(LandingPage)} />
        <Route path="/register" exact component={() => PaperShell(RegisterPage)} />
        <Route path="/login" exact component={() => PaperShell(LoginPage)} />
        <Route path="/play" exact component={GamePage} />
        <Route path="*" component={() => ErrorShell(Error404)} />
      </Switch>
    </TransitionGroup>
  );
}
