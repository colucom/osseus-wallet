const Web3 = require('web3')
const config = require('./config')

const create = () => {
  return new Web3(Web3.givenProvider || config.data.osseus_wallet.provider)
}

const init = (web3, self) => {
  const account = config.data.osseus_wallet.account
  const password = config.data.osseus_wallet.password
  if (account) {
    return web3.eth.personal.unlockAccount(account, password).then(
      () => {
        web3.eth.defaultAccount = account
      }
    ).then(() => {
      Object.assign(self, web3)
      return self
    })
  } else {
    return web3.eth.getAccounts().then((accounts) => {
      web3.eth.defaultAccount = accounts[0] || account
    }).then(() => {
      Object.assign(self, web3)
      return self
    })
  }
}

module.exports = {
  create,
  init
}
