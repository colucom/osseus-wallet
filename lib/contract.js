const get = require('./index').get
const config = require('./config')
const path = require('path')

const contractsByName = {}
const contractsByAddress = {}

const cwd = process.cwd()

const addresses = config.data.osseus_wallet.addresses || require(path.join(cwd, config.data.osseus_wallet.contract_path))

const getAbi = (contractName) => config.data.osseus_wallet.abi
  ? config.data.osseus_wallet.abi[contractName]
  : require(path.join(cwd, config.data.osseus_wallet.abi_path, contractName))

const createContract = ({contractName, abiName, address}) => {
  if (!address) {
    address = addresses[contractName]
  }
  const web3 = get()
  const abi = getAbi(config, abiName || contractName)

  const contract = new web3.eth.Contract(abi, address)

  contractsByAddress[address] = contract
  return contract
}

const getContract = ({contractName, abiName, address}) => {
  if (contractName && contractsByName.hasOwnProperty(contractName)) {
    return contractsByName[contractName]
  }
  if (address && contractsByAddress.hasOwnProperty(address)) {
    return contractsByAddress[address]
  }
  const contract = createContract({contractName, abiName, address})
  if (contractName) {
    contractsByName[contractName] = contract
  }
  return contract
}

const addContract = ({contractName, contract}) => {
  contractsByName[contractName] = contract
  contractsByAddress[contract.address] = contract
}

module.exports = {
  createContract,
  getContract,
  addContract
}
