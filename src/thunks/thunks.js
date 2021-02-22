import {
  actionAufgabeHinzufuegen,
  actionLoescheEintrag,
  actionAufgabenLaden,
  actionNummerTriviaHolen,
  actionNummerTriviaFehler,
  actionFetchTaskList
} from '../actions/actions';

export const aufgabeHinzufuegen = aufgabe => dispatch => dispatch(actionAufgabeHinzufuegen(aufgabe));

export const loescheEintrag = index => dispatch => dispatch(actionLoescheEintrag(index));

export const aufgabenLaden = aufgaben => dispatch => dispatch(actionAufgabenLaden(aufgaben));

export const nummerTriviaHolen = nummer => dispatch => {
  const apiUrl = "http://numbersapi.com/" + nummer;
  window.fetch(apiUrl).then(response => {
    response.text().then(trivia => {
      dispatch(actionNummerTriviaHolen(trivia))
    })
  }).catch(error => dispatch(actionNummerTriviaFehler(error.toString())));
};

export const fetchTaskList = () => dispatch => {
  console.log("Bin in fetch");
  window.fetch('http://localhost:3000/tasks/')
.then(res => {
  console.log("komme ins erste then");
  console.log(res);
  return res.json();
})
.then(taskList => {
  console.log("komme ins zweite then");
  console.log(taskList);
  dispatch(actionFetchTaskList(taskList));
})
.catch(err => console.log(err))}