import React from 'react';
import { connect } from 'react-redux';
import { aufgabeHinzufuegen } from '../../thunks/thunks';
import PropTypes from 'prop-types';
import './InputTask.css';

class InputTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aufgabe: '',
      deadline: ''
    };
    this.handleChangeAufgabe = this.handleChangeAufgabe.bind(this);
    this.handleChangeDeadline = this.handleChangeDeadline.bind(this);
  }
  handleChangeAufgabe(event) {
    this.setState({ aufgabe: event.target.value });
  }
  handleChangeDeadline(event) {
    this.setState({ deadline: event.target.value });
  }
  render() {
    return (
      <section className="input-task">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Write a new task"
          onChange={this.handleChangeAufgabe}
          value={this.state.aufgabe}
        />
        <input
          type="date"
          name="deadline"
          id="deadline"
          onChange={this.handleChangeDeadline}
          value={this.state.deadline}
        />
        <button
          className="add-task"
          onClick={() => {
            if (!this.state.aufgabe) {
              alert('Trage eine Aufgabe ein!');
            } else if (!this.state.deadline) {
              alert('Gib ein Datum an!');
            } else {
              this.props.aufgabeHinzufuegen(this.state.aufgabe, this.state.deadline);
              this.setState({
                aufgabe: '',
                deadline: ''
              });
            }
          }}
        >
          Add Task
        </button>
      </section>
    )
  }
};

InputTask.propTypes = {
  aufgabeHinzufuegen: PropTypes.func.isRequired
};

export default connect(null, { aufgabeHinzufuegen })(InputTask);