import './Eintrag.css';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loescheEintrag, erledigtSetzen } from '../../thunks/thunks';
import PropTypes from 'prop-types';

const Eintrag = props => {
  // hook für den lokalen State
  const [isCompleted, setIsCompleted] = useState(false);
  // isCompleted setzen für den anfänglichen State, wenn das Component geladen wird
  useEffect(() => setIsCompleted(props.completed), [props.completed]);
  return (
    <li id={"eintrag" + props.index} className={"bgcolor-" + Math.floor(Math.random() * 5)}>
      {props.aufgabe}<br />
    Zu erledigen bis {props.deadline}
      <input
        type="checkbox"
        name="completed"
        id="completed"
        checked={isCompleted}
        onClick={() => {
          props.erledigtSetzen(props.id, !isCompleted, props.index);
          setIsCompleted(!isCompleted);
        }}
      />
      <span
        className="delete-sign"
        onClick={event => {
          // const index = +event.target.parentElement.id.replace("eintrag", "");
          props.loescheEintrag(props.index, props.id);
        }}
      >
        ✕
    </span>
    </li>
  )
};

Eintrag.propTypes = {
  loescheEintrag: PropTypes.func.isRequired,
  erledigtSetzen: PropTypes.func.isRequired
};

export default connect(null, { loescheEintrag, erledigtSetzen })(Eintrag);