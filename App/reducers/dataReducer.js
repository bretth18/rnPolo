
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'
const initialState = {
  data: [],
  isLoading: false,
  hasErrored: false
};

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case 'DATA_IS_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCHING_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasErrored: false,
        data: [action.data]
      }
    case 'FETCHING_DATA_FAILURE':
      return {
        ...state,
        hasErrored: true
      }
    default:
      return state
  }
};
