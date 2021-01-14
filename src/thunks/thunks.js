import {
  actionAufgabeHinzufuegen,
  actionLoescheEintrag
} from '../actions/actions';

export const aufgabeHinzufuegen = aufgabe => dispatch => dispatch(actionAufgabeHinzufuegen(aufgabe));

export const loescheEintrag = index => dispatch => dispatch(actionLoescheEintrag(index));