import {
  actionAufgabeHinzufuegen,
  actionLoescheEintrag,
  // actionAufgabenLaden,
  actionNummerTriviaHolen,
  actionNummerTriviaFehler,
  actionFetchTaskList,
  actionErledigtSetzen
} from '../actions/actions';

const URL = 'https://todo-backend-exercise.herokuapp.com/';

// export const aufgabeHinzufuegen = aufgabe => dispatch => dispatch(actionAufgabeHinzufuegen(aufgabe));

export const aufgabeHinzufuegen = (aufgabe, deadline) => dispatch => {
  const body = {
    task: aufgabe,
    deadline,
    completed: false,
    userId: 'testId'
  };
  const bodyJson = JSON.stringify(body);
  window.fetch(URL + 'tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bodyJson
  })
  .then(res => res.json())
  .then(aufgabeMitId => dispatch(actionAufgabeHinzufuegen(aufgabeMitId)))
  .catch(err => console.log(err))
};

export const loescheEintrag = (index, id) => dispatch => {
  window.fetch(URL + 'tasks/' + id, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(res => {
    if (res.deletedCount !== 1) {
      throw new Error('Auf Server wurde keine Aufgabe gelöscht');
    }
    dispatch(actionLoescheEintrag(index));
  })
  .catch(err => console.log(err))
};

// export const aufgabenLaden = aufgaben => dispatch => dispatch(actionAufgabenLaden(aufgaben));

export const nummerTriviaHolen = nummer => dispatch => {
  const apiUrl = "https://numbersapi.com/" + nummer;
  window.fetch(apiUrl).then(response => {
    response.text().then(trivia => {
      dispatch(actionNummerTriviaHolen(trivia))
    })
  }).catch(error => dispatch(actionNummerTriviaFehler(error.toString())));
};

export const fetchTaskList = () => dispatch => window.fetch(URL + 'tasks/')
.then(res => res.json())
.then(taskList => dispatch(actionFetchTaskList(taskList)))
.catch(err => console.log(err));

export const erledigtSetzen = (id, isCompleted, index) => dispatch => {
  const body = { completed: isCompleted };
  const bodyJson = JSON.stringify(body);
  window.fetch(URL + 'tasks/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bodyJson
  })
  .then(res => res.json())
  .then(res => dispatch(actionErledigtSetzen(index)))
  .catch(err => console.log(err))
};
