import Eintrag from './Eintrag';
import './List.css';

const List = (props) => {
  return (
    <ul className="tasklist">
      {props.aufgaben.map(aufgabe => <Eintrag aufgabe = {aufgabe}/>)}
    </ul>
  )
};

export default List;