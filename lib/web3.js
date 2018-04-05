const Web3 = require('web3')
const config = require('./config')

const create = () => {
  return new Web3(Web3.givenProvider || config.data.fallbackProvider)
}

const init = (web3) => {
  if (config.data.account) {
    return web3.eth.personal.unlockAccount(config.data.account, config.data.password).then(
      () => {
        web3.eth.defaultAccount = config.data.account
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
