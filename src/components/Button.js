import './Button.css';

const Button = (props) => <button
  className="add-task"
  onClick={props.aufgabeHinzufuegen}
>Add Task</button>;

export default Button;