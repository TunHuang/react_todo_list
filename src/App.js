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
      aufgaben: [
        'Gehege ausmisten',
        'Schweine füttern',
        'Gemüse einkaufen',
        'Krallen schneiden',
        'Heu auffüllen'
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <section className="input-task">
          <InputText />
          <Button />
        </section>
  
        <List aufgaben = {this.state.aufgaben}/>
      </div>
    );
  }
};

export default App;
