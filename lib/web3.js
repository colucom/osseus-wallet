const Web3 = require('web3')
const config = require('./config')

const create = () => {
  return new Web3(Web3.givenProvider || config.data.osseus_wallet.provider)
}

const init = (web3) => {
  const account = config.data.osseus_wallet.account
  const password = config.data.osseus_wallet.password
  if (account) {
    return web3.eth.personal.unlockAccount(account, password).then(
      () => {
        web3.eth.defaultAccount = account
      }
    ).then(() => web3)
  } else {
    return web3.eth.getAccounts().then((accounts) => {
      web3.eth.defaultAccount = accounts[0] || account
    }).then(() => web3)
  }
}

module.exports = {
  create,
  init
}
