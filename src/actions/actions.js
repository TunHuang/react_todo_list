import { AUFGABE_HINZUFUEGEN,
  LOESCHE_EINTRAG,
  AUFGABEN_LADEN,
  NUMMERTRIVIA_HOLEN,
  NUMMERTRIVIA_FEHLER } from './types';

export const actionAufgabeHinzufuegen = aufgabe => ({
  type: AUFGABE_HINZUFUEGEN,
  payload: aufgabe
});

export const actionLoescheEintrag = index => ({
  type: LOESCHE_EINTRAG,
  payload: index
});

export const actionAufgabenLaden = aufgaben => ({
  type: AUFGABEN_LADEN,
  payload: aufgaben
});

export const actionNummerTriviaHolen = trivia => ({
  type: NUMMERTRIVIA_HOLEN,
  payload: trivia
});

export const actionNummerTriviaFehler = fehler => ({
  type: NUMMERTRIVIA_FEHLER,
  payload: fehler
});