import './App.css';
import Header from './components/todoApp/Header';
import List from './components/todoApp/List';
import Navbar from './components/page/Navbar';
import NoMatch from './components/page/NoMatch';
import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Hilfe from './components/page/Hilfe';
import InputTask from './components/todoApp/InputTask';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { aufgabenLaden } from './thunks/thunks';
import { fetchTaskList } from './thunks/thunks';
import NumberTrivia from './components/numberTrivia/NumberTrivia';

class App extends React.Component {
  componentDidMount() {
    console.log("komme ins componentDidMount");
    this.props.fetchTaskList();
  }
  render() {
    return (
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/hilfe">
                <Hilfe />
              </Route>
              <Route exact path="/">
                <Header />
                <InputTask />
                <List />
              </Route>
              <Route path="/trivia">
                <NumberTrivia />
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
  fetchTaskList: PropTypes.func.isRequired
};

export default connect(null, { fetchTaskList })(App);
