import React from 'react';
import { connect } from 'react-redux';
import { aufgabeHinzufuegen } from '../thunks/thunks';

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
        />
        <button
          className="add-task"
          onClick={() => {
            this.props.aufgabeHinzufuegen(this.state.aufgabe);
            this.setState({name: ''});
          }}
        >
          Add Task
        </button>
      </section>
    )
  }
};

// const mapStateToProps = state => ({
//   aufgaben: state.aufgaben
// });

export default connect(null, { aufgabeHinzufuegen })(InputTask);