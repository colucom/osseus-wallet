exports = module.exports

function setConfig(data) {
  data.get = function (key) {
    return data.wallet[key.toLowerCase()] || data[key.toLowerCase()]
  }
  exports.data = data
}

exports.setConfig = setConfig
