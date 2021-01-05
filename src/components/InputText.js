import './InputText.css';

const InputText = (props) => <input
  type="text"
  name="task"
  id="task"
  placeholder="Write New Task"
  // value={props.textInput}
  onChange={props.handleChange}
/>;

export default InputText;