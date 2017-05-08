
// function wampino() {
//   var wsuri = "wss://api.poloniex.com";
//   var connection = new wamp.Connection({
//     url: wsuri,
//     realm: "realm1"
//   });
//
//   connection.onopen = function (session) {
//   	function marketEvent (args,kwargs) {
//   		console.log(args);
//   	}
//   	function tickerEvent (args,kwargs) {
//   		console.log(args);
//   	}
//   	function trollboxEvent (args,kwargs) {
//   		console.log(args);
//   	}
//   	session.subscribe('BTC_XMR', marketEvent);
//   	session.subscribe('ticker', tickerEvent);
//   	session.subscribe('trollbox', tickerEvent);
//   }
//
//   connection.onclose = function () {
//     console.log("Websocket connection closed");
//   }
//
//   connection.open();
// }
//
// var doto = wampino();

// CONSTANTS
var POLO_ENDPOINT = 'api.poloniex.co';

async function getPriceData() {
  try {
    let response = await fetch('https://poloniex.com/public?command=returnTicker');
    let responseJson = await response.json();
    console.log('response: ', responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}


// WS
 function setWebSocket(endpoint, sessionToken) {
  if (sessionToken === 'trollbox') {
    const ws = new WebSocket('wss://' + endPoint + '/' + sessionToken);
  } else {
    const ws = new WebSocket('wss://' + endPoint + '/api/live?authToken=' + sessionToken);
  }
  console.log('Setting socket: ' + 'wss://' + endpoint + '/api/live?authToken=' + sessionToken);

  return ws;
}


export function getWebSocket(sessionToken) {
  // set up
  setWebSocket(POLO_ENDPOINT, sessionToken);

  ws.onopen = () => {
    // subscribe to updates, call action
    console.log('ws openened');
  };

  ws.onmessage = (e) => {
    // handle data w/ redux and set state?
    // should be handled in component likely
    console.log(e.data);
  };

  ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
  };

  ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
  };



}

// console.log('chatdata: ', tickerEvent);
export default () => {
  return getPriceData();
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     return resolve(doto)
  //   }, 3000)
  // });
}
