const OsseusConfig = require('osseus-config')
// const OsseusLogger = require('osseus-logger')
const OsseusWallet = require('../index')

async function main () {
  const config = await OsseusConfig.init()
  // const logger = await OsseusLogger.init(config)
  const wallet = await OsseusWallet.init({config})
  const web3 = wallet.web3
  console.log(wallet)
  // console.log(web3.version)
  try {
    console.log('successfully connected to web3')
    console.log(`web3 version: ${web3.version}`)
    console.log(`provider host: ${web3.currentProvider.host}`)
    console.log(`account: ${web3.eth.personal.defaultAccount}`)
    const networkType = await web3.eth.net.getNetworkType()
    console.log(`network: ${networkType}`)

    const status = await web3.eth.isSyncing()
    console.log(`is syncing: ${JSON.stringify(status)}`)

    const balance = await web3.eth.getBalance(web3.eth.personal.defaultAccount)
    console.log(`balance: ${balance}`)

    if (networkType === 'ropsten') {
      const receipt = await web3.eth.sendTransaction({
        value: 10 ** 17,
        to: '0x0d4DF041Dbef6fFC0E444a4a213774AdB0c118C2',
        gasPrice: 10
      }).on('transactionHash', function (transactionHash) {
        console.log(`transactionHash: ${transactionHash}`)
        console.log('The network might be busy, so this call might hang up.')
      })
      console.log('receipt:')
      console.log(receipt)
    }
  } catch (error) {
    console.error(error)
  }
}

main()
