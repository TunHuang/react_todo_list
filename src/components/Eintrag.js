import './Eintrag.css';

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

export default Eintrag;