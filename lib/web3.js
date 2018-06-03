const Web3 = require('web3')
const config = require('./config')

const create = function () {
  return new Web3(Web3.givenProvider || config.data.osseus_wallet.provider)
}

const init = function (web3) {
  const account = config.data.osseus_wallet.account
  const password = config.data.osseus_wallet.password
  if (account) {
    return web3.eth.personal.unlockAccount(account, password).then(
      function () {
        web3.eth.defaultAccount = account
        return web3
      }
    )
  } else {
    return web3.eth.getAccounts().then(function (accounts) {
      web3.eth.defaultAccount = accounts[0] || account
      return web3
    })
  }
}

module.exports = {
  create,
  init
}
