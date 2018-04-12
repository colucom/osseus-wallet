const OsseusConfig = require('osseus-config')
// const OsseusLogger = require('osseus-logger')
const OsseusWallet = require('../index')

async function main () {
  const config = await OsseusConfig.init()
  // const logger = await OsseusLogger.init(config)
  const wallet = await OsseusWallet.init({config})
  const web3 = wallet.web3
  const contract = wallet.contract

  try {
    console.log(`account: ${web3.eth.personal.defaultAccount}`)
    const ColuLocalNetworkContract = contract.getContract({contractName: 'ColuLocalNetwork'})

    const name = await ColuLocalNetworkContract.methods.name().call()
    console.log(`contract name: ${name}`)

    const balance = await ColuLocalNetworkContract.methods.balanceOf(config.address).call()
    console.log(`account balance: ${balance}`)

    const CurrencyFactoryContract = contract.getContract({contractName: 'CurrencyFactory'})
    const tokenAddress = await CurrencyFactoryContract.methods.tokens(0).call()

    const ColuLocalCurrencyContract = contract.getContract({abiName: 'ColuLocalNetwork', address: tokenAddress})
    const ccName = await ColuLocalCurrencyContract.methods.name().call()
    console.log(`Colu Local Currency name: ${ccName}`)

    contract.addContract({contractName: ccName, contract: ColuLocalCurrencyContract})
    console.log('new contract have been added to the contracts store')

    // getting and adding with one command if you know the contract name
    const ColuLocalCurrencyContractSecond = contract.getContract({contractName: 'newName',
      abiName: 'ColuLocalNetwork', address: tokenAddress})
    console.log('another new contract have been added to the contracts store')

    console.log('approving 1 CLN, this call might hang up')
    const receipt = await ColuLocalNetworkContract.methods.approve('0x0d4DF041Dbef6fFC0E444a4a213774AdB0c118C2', 1 ** 18).send({
      from: web3.eth.defaultAccount
    })
    console.log('receipt:')
    console.log(receipt)
  } catch (error) {
    console.error(error)
  }
}

main()
