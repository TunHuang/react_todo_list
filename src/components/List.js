import Eintrag from './Eintrag';
import './List.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class List extends React.Component {
  componentDidUpdate() {
    localStorage.setItem('todoaufgaben', JSON.stringify(this.props.aufgaben));
  }
  render() {
    return (
      <ul className="tasklist">
        {this.props.aufgaben.map((aufgabe, index) =>
          <Eintrag
            aufgabe={aufgabe}
            key={index}
            index={index}
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
  aufgaben: state.aufgaben
});

export default connect(mapStateToProps, null)(List);