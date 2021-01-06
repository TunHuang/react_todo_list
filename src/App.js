import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import InputText from './components/InputText';
import List from './components/List';
import Navbar from './components/Navbar';
import React from 'react';

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
      <div className="App">
        <Navbar />
        <Header />
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
      </div>
    );
  }
};

export default App;
