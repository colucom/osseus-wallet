const get = require('../index').get
const addressess = require('../constants/addresses')

const contracts = {}

const createContract = (contractName) => {
  const web3 = get()
  const address = addressess[contractName]
  const abi = require('../constants/abi/' + contractName)
  return new web3.eth.Contract(abi, address)
}

const getContract = (contractName) => {
  if (contracts.hasOwnProperty(contractName)) {
    return contracts[contractName]
  }
  contracts[contractName] = createContract(contractName)
  return contracts[contractName]
}

module.exports = {
  createContract,
  getContract
}
