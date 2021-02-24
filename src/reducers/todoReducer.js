import {
  AUFGABE_HINZUFUEGEN,
  LOESCHE_EINTRAG,
  AUFGABEN_LADEN,
  FETCH_TASKLIST,
  ERLEDIGT_SETZEN
} from '../actions/types';

const initialState = {
  aufgaben: []
};

export default function todoReducer (state = initialState, action) {
  switch(action.type) {
    case AUFGABE_HINZUFUEGEN:
      return {...state, aufgaben: [...state.aufgaben, action.payload]};
    case LOESCHE_EINTRAG:
      return {...state, aufgaben: [
        ...state.aufgaben.slice(0, action.payload),
        ...state.aufgaben.slice(action.payload + 1)
      ]};
    case AUFGABEN_LADEN:
      return {...state, aufgaben: action.payload};
    case FETCH_TASKLIST:
      // hole nur Tasks aus den Objekten im Array
      // const aufgaben = action.payload.map(element => element.task);
      return {...state, aufgaben: action.payload};
    case ERLEDIGT_SETZEN:
      const completed = !state.aufgaben[action.payload].completed;
      return {...state, aufgaben: [
        ...state.aufgaben.slice(0, action.payload),
        { ...state.aufgaben[action.payload], completed },
        ...state.aufgaben.slice(action.payload + 1)
      ]};
    default:
      return state;
  }
};