const createWeb3 = require('./web3').createWeb3

exports = module.exports

exports.web3 = null
function init (config) {
  if (!exports.web3) {
    exports.web3 = createWeb3(config)
  }
  return exports.web3
}

exports.init = init
// module.exports = {
//   init,
//   web3
// }
