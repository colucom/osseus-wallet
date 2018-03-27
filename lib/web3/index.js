const Web3 = require('web3')

const createWeb3 = (config) => {
  const web3 = new Web3(Web3.givenProvider || config.fallbackProvider)

  if (config.account) {
    return web3.eth.personal.unlockAccount(config.account, config.password).then(
      () => {
        web3.eth.defaultAccount = config.account
      }
    ).then(() => web3)
  }

  return web3.eth.getAccounts().then((accounts) => {
    web3.eth.defaultAccount = accounts[0]
  }).then(() => web3)
}

module.exports = {
  createWeb3
}
