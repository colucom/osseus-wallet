const web3 = require('./web3')

exports = module.exports

const get = (config = {}) => exports.web3 || web3.create(config)

function init (config = {}) {
  exports.web3 = get(config)
  return web3.init(config, exports.web3)
}

exports.init = init
exports.get = get
