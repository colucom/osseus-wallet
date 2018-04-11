const get = require('./index').get
const config = require('./config')
const path = require('path')

const contracts = {}

const cwd = process.cwd()

const getAbi = (config, contractName) => config.data.osseus_wallet.abi
  ? config.data.osseus_wallet.abi[contractName]
  : require(path.join(cwd, config.data.osseus_wallet.abi_path, contractName))

const createContract = ({contractName, abiName, address}) => {
  if (!address) {
    const addresses = config.data.osseus_wallet.addresses || require(path.join(cwd, config.data.osseus_wallet.contract_path))
    address = addresses[contractName]
  }
  const web3 = get()
  const abi = getAbi(config, abiName || contractName)

  return new web3.eth.Contract(abi, address)
}

const getContract = ({contractName, abiName, address}) => {
  if (contractName && contracts.hasOwnProperty(contractName)) {
    return contracts[contractName]
  }
  const contract = createContract({contractName, abiName, address})
  if (contractName) {
    contracts[contractName] = contract
  }
  return contract
}

const addContract = ({contractName, contract}) => {
  contracts[contractName] = contract
}

module.exports = {
  createContract,
  getContract,
  addContract
}
