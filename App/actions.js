
import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  CHAT_MESSAGE,
  CONNECT,
  DISCONNECT,
  SEND_CHAT_MESSAGE,
  CONNECTING,
 } from './constants'
import { getChat, getWebSocket } from './api'


export function getData() {
  return {
    type: FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: FETCHING_DATA_FAILURE
  }
}


// WSS



// socket middleware - redo
export function connecting() {
  return {
    type: CONNECTING
  }
}
export function connected() {
  return {
    type: CONNECT
  }
}

export function disconnected() {
  return {
    type: DISCONNECT
  }
}

export function messageReceived(msg) {
  return {
    type: CHAT_MESSAGE,
    msg,
  }
}


export function fetchSocketData() {
  return (dispatch) => {
    dispatch(connecting())
    getWsData()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('error: ', err))
  }
}
export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    getData()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('error:',err))
  }
}
