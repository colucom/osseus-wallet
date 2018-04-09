const get = require('./index').get
const config = require('./config')
const path = require('path')

const contracts = {}

const cwd = process.cwd()

const getAbi = (config, contractName) => config.data.get('ABI') ?
  config.data.get('ABI')[contractName] : require(path.join(cwd, config.data.get('ABI_PATH'), contractName))

const createContract = (contractName) => {
  const addresses = require(path.join(cwd, config.data.get('CONTRACT_PATH')))
  const web3 = get()
  const address = addresses[contractName]
  const abi = getAbi(config, contractName)

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
