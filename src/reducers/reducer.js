import {
  AUFGABE_HINZUFUEGEN,
  LOESCHE_EINTRAG,
  AUFGABEN_LADEN
} from '../actions/actions';

const initialState = {
  aufgaben: []
};

export default function reducer (state = initialState, action) {
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
    default:
      return state;
  }
};