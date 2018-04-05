const defaultConfig = require('../config.dev')
const init = require('../index').init
const getContract = require('../lib/contract').getContract

config = {
    account: '0x22D481f977abfB7471d1b1b65465754074A7db5c',
    addresses: require('./misc/constants/addresses'),
    abiPath: __dirname + '/misc/constants/abi/'
}

init({...defaultConfig, ...config}).then(async (web3) => {
  try {
    console.log(`account: ${web3.eth.personal.defaultAccount}`)
    const ColuLocalNetworkContract = getContract('ColuLocalNetwork')

    const name = await ColuLocalNetworkContract.methods.name().call()
    console.log(`contract name: ${name}`)

    const balance = await ColuLocalNetworkContract.methods.balanceOf(config.address).call()
    console.log(`account balance: ${balance}`)

    console.log('approving 1 CLN, this call might hang up')
    const receipt = await ColuLocalNetworkContract.methods.approve('0x0d4DF041Dbef6fFC0E444a4a213774AdB0c118C2', 1 ** 18).send({
      from: web3.eth.defaultAccount
    })
    console.log('receipt:')
    console.log(receipt)
  } catch (error) {
    console.error(error)
  }
})
