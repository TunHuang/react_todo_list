import Eintrag from './Eintrag';
import './List.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
  // componentDidUpdate() {
  //   localStorage.setItem('todoaufgaben', JSON.stringify(this.props.aufgaben));
  // }
  render() {
    return (
      <ul className="tasklist">
        {/* Im Array sind nun Objekte, daraus wird task geholt */}
        {this.props.aufgaben.map((objekt, index) =>
          <Eintrag
            aufgabe={objekt.task}
            deadline={objekt.deadline}
            completed={objekt.completed}
            key={index}
            index={index}
            id={objekt._id}
          />
        )}
      </ul>
    )
  }
};

List.propTypes = {
  aufgaben: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  aufgaben: state.todos.aufgaben
});

export default connect(mapStateToProps, null)(List);