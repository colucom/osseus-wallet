const Web3 = require('web3')
const config = require('./config')

const create = () => {
  return new Web3(Web3.givenProvider || config.data.get('FALLBACK_PROVIDER'))
}

const init = (web3) => {
  if (config.data.get('ACCOUNT')) {
    return web3.eth.personal.unlockAccount(config.data.get('ACCOUNT'), config.data.get('PASSWORD')).then(
      () => {
        web3.eth.defaultAccount = config.data.get('ACCOUNT')
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
