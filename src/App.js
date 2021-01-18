import './App.css';
import Header from './components/Header';
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
import { Provider } from 'react-redux';
import store from './store';
import InputTask from './components/InputTask';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { aufgabenLaden } from './thunks/thunks';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       aufgaben: [],
//       textInput: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.aufgabeHinzufuegen = this.aufgabeHinzufuegen.bind(this);
//     this.loescheEintrag = this.loescheEintrag.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ textInput: event.target.value });
//   }
//   aufgabeHinzufuegen() {
//     this.setState(state => ({
//       aufgaben: [...state.aufgaben, this.state.textInput],
//       textInput: ''
//     }));
//   }
//   loescheEintrag(event) {
//     const id = +event.target.parentElement.id.replace("eintrag", "");
//     // const aufgabenNachLoeschen = this.state.aufgaben.filter((element, index) => index !== id);
//     // this.setState({aufgaben: aufgabenNachLoeschen});
//     // this.setState(state => ({aufgaben: state.aufgaben.filter((element, index) => index !== id)}));
//     this.setState(state => {
//       return { aufgaben: state.aufgaben.filter((element, index) => index !== id) }
//     });
//   }
//   componentDidMount() {
//     const aufgabenInStorage = localStorage.getItem('aufgaben');
//     if (aufgabenInStorage) {
//       this.setState({
//         aufgaben: JSON.parse(aufgabenInStorage)
//       })
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.aufgaben !== prevState.aufgaben) {
//       localStorage.setItem('aufgaben', JSON.stringify(this.state.aufgaben));
//     }
//   }
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <Header />
//           <Switch>
//             <Route path="/hilfe">
//               <Hilfe />
//             </Route>
//             <Route exact path="/">
//               <section className="input-task">
//                 <InputText
//                   handleChange={this.handleChange}
//                   textInput={this.state.textInput}
//                 />
//                 <Button aufgabeHinzufuegen={this.aufgabeHinzufuegen} />
//               </section>

//               <List
//                 aufgaben={this.state.aufgaben}
//                 loescheEintrag={this.loescheEintrag}
//               />
//             </Route>
//             <Route path="*">
//               <NoMatch />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// };

const App = props => {
  return (
    <Router>
      <Provider store={store}>
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
      </Provider>
    </Router>
  )
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     const aufgabenString = localStorage.getItem('todoaufgaben');
//     if (aufgabenString) {
//       const aufgabenArray = JSON.parse(aufgabenString);
//       this.props.aufgabenLaden(aufgabenArray);
//     }
//   }
//   render() {
//     return (
//       <Router>
//         <Provider store={store}>
//           <div className="App">
//             <Navbar />
//             <Header />
//             <Switch>
//               <Route path="/hilfe">
//                 <Hilfe />
//               </Route>
//               <Route exact path="/">
//                 <InputTask />
//                 <List />
//               </Route>
//               <Route path="*">
//                 <NoMatch />
//               </Route>
//             </Switch>
//           </div>
//         </Provider>
//       </Router>
//     )
//   }
// };

App.propTypes = {
  aufgabenLaden: PropTypes.func.isRequired
};

// export default connect(null, { aufgabenLaden })(App);

export default App;
