import { createContext } from 'react';
import { ENGLISH, SPANISH } from '../../utils/translation';

export const initalState = {
  search: '',
  booklist: {},
  history: '',
  ...SPANISH,
};

export const GlobalContext = createContext(initalState);

export function reducer(state :any, action :any) {
  switch (action.type) {
    case 'SET_HISTORY':
      return {
        ...state,
        history: action.payload,
      };
    case 'SET_SPANISH_MODE':
      return {
        ...state,
        ...SPANISH,
      };
    case 'SET_ENGLISH_MODE':
      return {
        ...state,
        ...ENGLISH
      }
    case 'SET_SEARCH_KEYWORD':
      return {
        ...state,
        history: state.search,
        search: action.payload,
      };
    default:
      throw new Error('ACTION NOT RECOGNIZED');
  }
}