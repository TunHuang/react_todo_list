import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import InputText from './components/InputText';
import List from './components/List';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Hilfe from './components/Hilfe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aufgaben: [],
      textInput: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.aufgabeHinzufuegen = this.aufgabeHinzufuegen.bind(this);
    this.loescheEintrag = this.loescheEintrag.bind(this);
  }
  handleChange(event) {
    this.setState({textInput: event.target.value});
  }
  aufgabeHinzufuegen() {
    this.setState(state => ({
      aufgaben: [...state.aufgaben, this.state.textInput],
      textInput: ''
    }));
  }
  loescheEintrag(event) {
    const id = +event.target.parentElement.id.replace("eintrag", "");
    // const aufgabenNachLoeschen = this.state.aufgaben.filter((element, index) => index !== id);
    // this.setState({aufgaben: aufgabenNachLoeschen});
    // this.setState(state => ({aufgaben: state.aufgaben.filter((element, index) => index !== id)}));
    this.setState(state => {
      return {aufgaben: state.aufgaben.filter((element, index) => index !== id)}
    });
  }
  componentDidMount() {
    const aufgabenInStorage = localStorage.getItem('aufgaben');
    if (aufgabenInStorage) {
      this.setState({
        aufgaben: JSON.parse(aufgabenInStorage)
      })
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.aufgaben !== prevState.aufgaben) {
      localStorage.setItem('aufgaben', JSON.stringify(this.state.aufgaben));
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route path="/hilfe">
              <Hilfe />
            </Route>
            <Route exact path="/">
              <section className="input-task">
                <InputText
                  handleChange={this.handleChange}
                  textInput={this.state.textInput}
                />
                <Button aufgabeHinzufuegen={this.aufgabeHinzufuegen}/>
              </section>
        
              <List
                aufgaben = {this.state.aufgaben}
                loescheEintrag = {this.loescheEintrag}
              />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
