const init = require('../../index').init
const getContract = require('../../lib/web3/contracts').getContract

const web3 = init({
  fallbackProvider: 'http://127.0.0.1:8545',
  account: '0x22D481f977abfB7471d1b1b65465754074A7db5c',
  password: 'm1testpass'
})

const ColuLocalNetworkContract = getContract('ColuLocalNetwork')

ColuLocalNetworkContract.methods.name().call().then(console.log).catch(console.error)

console.log(web3.eth.personal.defaultAccount)

// web3.eth.personal.unlockAccount('0x22D481f977abfB7471d1b1b65465754074A7db5c', 'm1testpass').then(() => {
//   console.log(web3.eth.personal.defaultAccount)
// })
