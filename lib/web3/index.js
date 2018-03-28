const Web3 = require('web3')

const create = (config) => {
  return new Web3(Web3.givenProvider || config.fallbackProvider)
}

const init = (config, web3) => {
  if (config.account) {
    return web3.eth.personal.unlockAccount(config.account, config.password).then(
      () => {
        web3.eth.defaultAccount = config.account
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
