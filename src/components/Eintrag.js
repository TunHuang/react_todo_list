import './Eintrag.css';

const Eintrag = props =>
  <li id={"eintrag" + props.index}>
    {props.aufgabe}
    <span
      className="delete-sign"
      onClick={props.loescheEintrag}
    >
      ✕
    </span>
  </li>;

export default Eintrag;