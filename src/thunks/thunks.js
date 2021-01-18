import {
  actionAufgabeHinzufuegen,
  actionLoescheEintrag,
  actionAufgabenLaden
} from '../actions/actions';

export const aufgabeHinzufuegen = aufgabe => dispatch => dispatch(actionAufgabeHinzufuegen(aufgabe));

export const loescheEintrag = index => dispatch => dispatch(actionLoescheEintrag(index));

export const aufgabenLaden = aufgaben => dispatch => dispatch(actionAufgabenLaden(aufgaben));