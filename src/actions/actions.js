export const AUFGABE_HINZUFUEGEN = 'AUFGABE_HINZUFUEGEN';
export const LOESCHE_EINTRAG = 'LOESCHE_EINTRAG';

export const actionAufgabeHinzufuegen = aufgabe => ({
  type: AUFGABE_HINZUFUEGEN,
  payload: aufgabe
});

export const actionLoescheEintrag = index => ({
  type: LOESCHE_EINTRAG,
  payload: index
});