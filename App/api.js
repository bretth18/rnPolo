// import wamp from 'wamp.js';
//
//
//
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

// plnx.push(function(session) {
//   session.subscribe("trollbox", function(chatData){
//     console.log(chatData);
//   });
// });
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


async funtion getTransactionData() {
  try {
    
  }
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
