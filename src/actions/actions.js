export const AUFGABE_HINZUFUEGEN = 'AUFGABE_HINZUFUEGEN';
export const LOESCHE_EINTRAG = 'LOESCHE_EINTRAG';
export const AUFGABEN_LADEN = 'AUFGABEN_LADEN';
export const NUMMERTRIVIA_HOLEN = 'NUMMERTRIVIA_HOLEN';
export const NUMMERTRIVIA_FEHLER = 'NUMMERTRIVIA_FEHLER';

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