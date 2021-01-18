import {
  AUFGABE_HINZUFUEGEN,
  LOESCHE_EINTRAG,
  AUFGABEN_LADEN,
  NUMMERTRIVIA_HOLEN,
  NUMMERTRIVIA_FEHLER
} from '../actions/actions';

const initialState = {
  aufgaben: [],
  trivia: '',
  error: false,
  cause: ''
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
    case NUMMERTRIVIA_HOLEN:
      return {
        ...state,
        trivia: action.payload,
        error: false,
        cause: ''
      };
    case NUMMERTRIVIA_FEHLER:
      return {
        ...state,
        trivia: '',
        error: true,
        cause: action.payload
      }
    default:
      return state;
  }
};