import './Eintrag.css';
import React from 'react';
import { connect } from 'react-redux';
import { loescheEintrag } from '../thunks/thunks';

const Eintrag = props =>
  <li id={"eintrag" + props.index} className={"bgcolor-" + Math.floor(Math.random()*5)}>
    {props.aufgabe}
    <span
      className="delete-sign"
      onClick={props.loescheEintrag}
    >
      ✕
    </span>
  </li>;

export default connect(null, {loescheEintrag})(Eintrag);