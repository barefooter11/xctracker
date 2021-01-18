import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Trails } from './features/trails/Trails';
import './App.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/trails">
            <Trails />
          </Route>
          <Route exact path="/">
            <Redirect to="/trails" />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
