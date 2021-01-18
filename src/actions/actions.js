export const AUFGABE_HINZUFUEGEN = 'AUFGABE_HINZUFUEGEN';
export const LOESCHE_EINTRAG = 'LOESCHE_EINTRAG';
export const AUFGABEN_LADEN = 'AUFGABEN_LADEN';

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