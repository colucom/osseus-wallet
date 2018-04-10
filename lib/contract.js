const get = require('./index').get
const config = require('./config')
const path = require('path')

const contracts = {}

const cwd = process.cwd()

const getAbi = (config, contractName) => config.data.osseus_wallet.abi
  ? config.data.osseus_wallet.abi[contractName]
  : require(path.join(cwd, config.data.osseus_wallet.abi_path, contractName))

const createContract = (contractName) => {
  const addresses = config.data.addresses || require(path.join(cwd, config.data.osseus_wallet.contract_path))
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
