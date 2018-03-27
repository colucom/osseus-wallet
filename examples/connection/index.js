const init = require('../../index').init
const config = require('../../config.dev')

init(config).then(
  web3 => {
    console.log('successfully connected to web3')
    console.log(`web3 version: ${web3.version}`)
    console.log(`provider host: ${web3.currentProvider.host}`)

    web3.eth.net.getNetworkType().then(networkType => {
      console.log(`network: ${networkType}`)
    })

    web3.eth.isSyncing().then(status => {
      console.log('sync status:')
      console.log(status)
    })
  }
)
//
// console.log('successfully connected to web3')
// console.log(`web3 version: ${web3.version}`)
// console.log(`provider host: ${web3.currentProvider.host}`)
//
// web3.eth.net.getNetworkType().then(networkType => {
//   console.log(`network: ${networkType}`)
// })
//
// web3.eth.isSyncing().then(status => {
//   console.log('sync status:')
//   console.log(status)
// })
