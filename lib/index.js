const web3 = require('./web3')
const setConfig = require('./config').setConfig

exports = module.exports

const get = function () {
  return exports.web3 || web3.create()
}

function init (osseus) {
  const config = osseus.config
  setConfig(config)
  exports.web3 = get()
  exports.contract = contract
  return web3.init(exports.web3).then(function () {
    return {
      web3: exports.web3,
      contract
    }
  })
}

exports.init = init
exports.get = get

const contract = require('./contract')
