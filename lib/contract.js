const get = require('./index').get
const config = require('./config')
const path = require('path')


const contracts = {}


const getAbi = (config, contractName) => config.data.get(`WALLET_ABI`) ?
  config.data.get(`WALLET_ABI`)[contractName] : require(path.join(config.data.get('WALLET_ABI_PATH'), contractName))

const createContract = (contractName) => {
  const addresses = require(config.data.get('WALLET_CONTRACT_PATH'))
  const web3 = get()
  const address = require(config.data.get('WALLET_CONTRACT_PATH'))[contractName]
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
