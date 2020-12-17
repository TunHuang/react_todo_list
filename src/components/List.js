import Eintrag from './Eintrag';
import './List.css';

const List = (props) => {
  return (
    <ul className="tasklist">
      {props.aufgaben.map((aufgabe, index) => <Eintrag
      aufgabe = {aufgabe}
      key = {index}/>)}
    </ul>
  )
};

export default List;