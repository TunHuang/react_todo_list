import React from 'react';
import { connect } from 'react-redux';
import { aufgabeHinzufuegen } from '../thunks/thunks';
import PropTypes from 'prop-types';

class InputTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aufgabe: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({aufgabe: event.target.value});
  }
  render() {
    return (
      <section className="input-task">
        <input
          type="text"
          name="task"
          id="task"
          onChange={this.handleChange}
          value={this.state.aufgabe}
        />
        <button
          className="add-task"
          onClick={() => {
            this.props.aufgabeHinzufuegen(this.state.aufgabe);
            this.setState({aufgabe: ''});
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