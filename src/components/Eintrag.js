import './Eintrag.css';
import React from 'react';
import { connect } from 'react-redux';
import { loescheEintrag } from '../thunks/thunks';
import PropTypes from 'prop-types';

const Eintrag = props =>
  <li id={"eintrag" + props.index} className={"bgcolor-" + Math.floor(Math.random()*5)}>
    {props.aufgabe}
    <span
      className="delete-sign"
      onClick={event => {
        const id = +event.target.parentElement.id.replace("eintrag", "");
        props.loescheEintrag(id);
      }}
    >
      ✕
    </span>
  </li>
;

Eintrag.propTypes = {
  loescheEintrag: PropTypes.func.isRequired
};

export default connect(null, {loescheEintrag})(Eintrag);