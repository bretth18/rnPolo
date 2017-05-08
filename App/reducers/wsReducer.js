
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  CONNECT,
  DISCONNECT,
  SEND_CHAT_MESSAGE,
  CHAT_MESSAGE,
} from '../constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false,
  isConnected: false,
  msg: []

};

export default function wsReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case DISCONNECT:
      return {
        ...state,
        isFetching: false,
        error: true,
        isConnected: false
      }
    case CHAT_MESSAGE:
      return {
        ...state,
        isFetching: false,
        error: false,
        isConnected: true
        msg: [],
      }
    default:
      return state
  }
};
