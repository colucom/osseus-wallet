const Web3 = require('web3')
const config = require('./config')

const create = () => {
  return new Web3(Web3.givenProvider || config.data.get('WALLET_FALLBACK_PROVIDER'))
}

const init = (web3) => {
  console.log(config.data.get('WALLET_ACCOUNT'))
  if (config.data.get('WALLET_ACCOUNT')) {
    return web3.eth.personal.unlockAccount(config.data.get('WALLET_ACCOUNT'), config.data.get('WALLET_PASSWORD')).then(
      () => {
        web3.eth.defaultAccount = config.data.get('WALLET_ACCOUNT')
      }
    ).then(() => web3)
  } else {
    return web3.eth.getAccounts().then((accounts) => {
      web3.eth.defaultAccount = accounts[0]
    }).then(() => web3)
  }
}

module.exports = {
  create,
  init
}
