import { NUMMERTRIVIA_HOLEN, NUMMERTRIVIA_FEHLER} from '../actions/types';

const initialState = {
  trivia: '',
  error: false,
  cause: ''
};

export default function triviaReducer(state = initialState, action) {
  switch(action.type) {
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