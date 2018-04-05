const get = require('./index').get
const config = require('./config')

const contracts = {}

const createContract = (contractName) => {
  const web3 = get()
  const address = config.data.addresses[contractName]
  const abi = require(config.data.abiPath + contractName)
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
