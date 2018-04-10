const web3 = require('./web3')
const setConfig = require('./config').setConfig

exports = module.exports

const get = () => exports.web3 || web3.create()

function init (osseus) {
  this.osseus = osseus
  const config = osseus.config
  setConfig(config)
  exports.web3 = get()
  return web3.init(exports.web3, this)
}

exports.init = init
exports.get = get
