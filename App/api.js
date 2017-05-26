'use strict';

import crypto from 'crypto';


// CONSTANTS
var POLO_ENDPOINT = 'api.poloniex.co';


// POLO METHODS PUBLIC

/* fetchPubMethod requires a compatible  method passed
    e.g. returnTicker, return24Volume, returnOrderBook */
async function fetchPublicMethod(method) {
  try {
    let response = await fetch('https://poloniex.com/public?command='+ method);
    let responseJson = await response.json();
    console.log('response: ', responseJson);
    return responseJson;
  } catch(error) {
    console.error(error);
  }
}


/* authToken structure:
    -key: user input
    -secret: user input
    -sign: function generated
*/


// POLO METHODS PRIVATE (REQUIRES KEY AND SIGN VARS)

// Generate HMAC-SHA512 signature for POST header
function generateHmac(authToken) {
  // create proper header using secret
  let authToken.sign = crypto.createHmac(sha512,authToken.secret);
  return authToken;
}

async function fetchPrivateMethod(authToken, method) {
  try {

    generateHmac(authToken);

    fetch('https://poloniex.com/tradingApi', {
      method: 'POST',
      headers: {
        'Key': authToken.key,
        'Sign': authToken.sign,
      },
      body: JSON.stringify({
        command: method,
        secondParam: 'yourOtherValue',
      })
    });
  } catch (error) {
    console.error(error);
  }
}


export default () => {
  return getPriceData();
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     return resolve(doto)
  //   }, 3000)
  // });
}
