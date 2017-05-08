'use strict';

import { Component } from 'react';



/* TODO: api.js should handle imports of websocket to this component to keep in line with
redux system
*/

class trollBox extends Component {
  constructor(props) {
    super(props)
    this._setWebSocket = this._setWebSocket.bind(this)
  }

  _setWebSocket(endpoint, sessionToken) {
    const ws = new WebSocket('wss://' + endPoint + '/api/live?authToken=' + sessionToken)
    console.log('Setting socket: ' + 'wss://' + endpoint + '/api/live?authToken=' + sessionToken)
  }

  componentDidMount() {
    this._setWebSocket(endpoint, token)
  }

  render() {
    return (
      <View />
    )
  }
}

export default trollBox
