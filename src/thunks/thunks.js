import {
  actionAufgabeHinzufuegen,
  actionLoescheEintrag,
  // actionAufgabenLaden,
  actionNummerTriviaHolen,
  actionNummerTriviaFehler,
  actionFetchTaskList
} from '../actions/actions';

// export const aufgabeHinzufuegen = aufgabe => dispatch => dispatch(actionAufgabeHinzufuegen(aufgabe));

export const aufgabeHinzufuegen = (aufgabe, deadline) => dispatch => {
  const url = 'http://localhost:3000/tasks/';
  const body = {
    task: aufgabe,
    deadline,
    completed: false,
    userId: 'testId'
  };
  const bodyJson = JSON.stringify(body);
  window.fetch(url, {
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
  const url = 'http://localhost:3000/tasks/' + id;
  window.fetch(url, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(res => {
    if (res.deletedCount !== 1) {
      throw new Error('Auf Server wurde keine Aufgabe gelöscht');
    }
    dispatch(actionLoescheEintrag(index))
  })
  .catch(err => console.log(err))
};

// export const aufgabenLaden = aufgaben => dispatch => dispatch(actionAufgabenLaden(aufgaben));

export const nummerTriviaHolen = nummer => dispatch => {
  const apiUrl = "http://numbersapi.com/" + nummer;
  window.fetch(apiUrl).then(response => {
    response.text().then(trivia => {
      dispatch(actionNummerTriviaHolen(trivia))
    })
  }).catch(error => dispatch(actionNummerTriviaFehler(error.toString())));
};

export const fetchTaskList = () => dispatch => window.fetch('http://localhost:3000/tasks/')
.then(res => res.json())
.then(taskList => dispatch(actionFetchTaskList(taskList)))
.catch(err => console.log(err));