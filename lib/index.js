const createWeb3 = require('./web3').createWeb3

exports = module.exports

function init (config) {
  if (!exports.web3) {
    return createWeb3(config).then(web3 => {
      exports.web3 = web3
      return web3
    })
  }
  return exports.web3
}

exports.init = init
