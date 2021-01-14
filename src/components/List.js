import Eintrag from './Eintrag';
import './List.css';
import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  aufgaben: state.aufgaben
});

export default connect(mapStateToProps, null)(List);