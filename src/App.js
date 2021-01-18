import './App.css';
import Header from './components/Header';
import List from './components/List';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Hilfe from './components/Hilfe';
import InputTask from './components/InputTask';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { aufgabenLaden } from './thunks/thunks';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const aufgabenString = localStorage.getItem('todoaufgaben');
    if (aufgabenString) {
      const aufgabenArray = JSON.parse(aufgabenString);
      this.props.aufgabenLaden(aufgabenArray);
    }
  }
  render() {
    return (
          <div className="App">
            <Navbar />
            <Header />
            <Switch>
              <Route path="/hilfe">
                <Hilfe />
              </Route>
              <Route exact path="/">
                <InputTask />
                <List />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
    )
  }
};

App.propTypes = {
  aufgabenLaden: PropTypes.func.isRequired
};

export default connect(null, { aufgabenLaden })(App);
