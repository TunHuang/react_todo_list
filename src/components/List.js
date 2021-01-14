import Eintrag from './Eintrag';
import './List.css';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const List = (props) => {
  return (
    <ul className="tasklist">
      {props.aufgaben.map((aufgabe, index) =>
        <Eintrag
          aufgabe = {aufgabe}
          key = {index}
          index = {index}
        />
      )}
    </ul>
  )
};

List.propTypes = {
  aufgaben: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = state => ({
  aufgaben: state.aufgaben
});

export default connect(mapStateToProps, null)(List);