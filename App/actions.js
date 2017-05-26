
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  CHAT_MESSAGE,
  CONNECT,
  DISCONNECT,
  SEND_CHAT_MESSAGE,
  CONNECTING,
} from './constants';

// import { fetchPublicMethod } from '/api';

// export function getData() {
//   return {
//     type: FETCHING_DATA
//   };
// }

export function dataFetchSuccess(data) {
  return {
    type: 'FETCHING_DATA_SUCCESS',
    data,
  };
}

export function getDataFailure(bool) {
  return {
    type: 'FETCHING_DATA_FAILURE',
    hasErrored: bool
  };
}

export function dataIsLoading(bool) {
  return {
    type: 'DATA_IS_LOADING',
    isLoading: bool
  };
}




// async using redux idk not clean
export function dataFetchData(url) {
  return (dispatch) => {
    dispatch(dataIsLoading(true));

    fetch(url)
        .then((response) => {
          if (!response.ok) {
            console.log(response);
            throw Error(response.statusText);
          }

          dispatch(dataIsLoading(false));

          return response;
          console.log('hey');
        })
        .then((response) => response.json())
        .then((data) => dispatch(dataFetchSuccess(data)))
        .catch(() => dispatch(getDataFailure(true)));

  };
}
