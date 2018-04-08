module.exports = {
  ENV: 'local',
  LOG_LEVEL: 'silly',
  WALLET_FALLBACK_PROVIDER: 'http://127.0.0.1:8545',
  WALLET_PASSWORD: process.env.WALLET_PASSWORD,
  WALLET_ACCOUNT: '0x22D481f977abfB7471d1b1b65465754074A7db5c',
  WALLET_CONTRACT_ADDRESSESS: require('../misc/constants/addresses'),
  WALLET_CONTRACT_PATH: __dirname  + '/../misc/constants/addresses',
  WALLET_ABI_PATH: __dirname + '/../misc/constants/abi/'
}
