import React from 'react';
import { connect } from 'react-redux';
import { nummerTriviaHolen } from '../thunks/thunks'

class NumberTrivia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({inputNumber: event.target.value});
  }
  render() {
    return (
      <section className="number-trivia">
        <input
          type="text"
          name="number-input"
          id="number-input"
          onChange={this.handleChange}
          value={this.state.inputNumber}
        />
        <button
          className="send-number"
          onClick={() => {
            this.props.nummerTriviaHolen(this.state.inputNumber);
            this.setState({inputNumber: ''})
          }}
        >
          Trivia
        </button>
        <p>{this.props.trivia}</p>
      </section>
    )
  }
};

const MapStateToProps = state => ({
  trivia: state.trivia,
  error: state.error,
  cause: state.cause
});

export default connect(MapStateToProps, {nummerTriviaHolen})(NumberTrivia);