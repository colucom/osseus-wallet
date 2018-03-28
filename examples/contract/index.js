const config = require('../../config.dev')
const init = require('../../index').init
const getContract = require('../../lib/contract').getContract

init(config).then(async (web3) => {
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
