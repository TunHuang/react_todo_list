import {
  actionAufgabeHinzufuegen,
  actionLoescheEintrag,
  actionAufgabenLaden,
  actionNummerTriviaHolen,
  actionNummerTriviaFehler
} from '../actions/actions';

export const aufgabeHinzufuegen = aufgabe => dispatch => dispatch(actionAufgabeHinzufuegen(aufgabe));

export const loescheEintrag = index => dispatch => dispatch(actionLoescheEintrag(index));

export const aufgabenLaden = aufgaben => dispatch => dispatch(actionAufgabenLaden(aufgaben));

export const nummerTriviaHolen = nummer => dispatch => {
  const apiUrl = "http://numbersapi.com/" + nummer;
  console.log("URL ist:", apiUrl);
  window.fetch(apiUrl).then(response => {
    response.text().then(trivia => {
      console.log("Trivia ist:", trivia);
      dispatch(actionNummerTriviaHolen(trivia))
    });
  })
};