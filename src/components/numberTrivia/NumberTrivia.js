import React from 'react';
import { connect } from 'react-redux';
import { nummerTriviaHolen } from '../../thunks/thunks';
import './NumberTrivia.css';
import PropTypes from 'prop-types';

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
        <h1>Nummer Trivia</h1>
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

NumberTrivia.propTypes = {
  trivia: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  cause: PropTypes.string.isRequired
};

const MapStateToProps = state => ({
  trivia: state.trivias.trivia,
  error: state.trivias.error,
  cause: state.trivias.cause
});

export default connect(MapStateToProps, {nummerTriviaHolen})(NumberTrivia);