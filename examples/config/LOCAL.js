module.exports = {
  ENV: 'local',
  OSSEUS_LOGGER_LOG_LEVEL: 'silly',
  OSSEUS_WALLET_FALLBACK_PROVIDER: 'http://127.0.0.1:8545',
  OSSEUS_WALLET_PASSWORD: process.env.WALLET_PASSWORD,
  OSSEUS_WALLET_ACCOUNT: '0x22D481f977abfB7471d1b1b65465754074A7db5c',
  OSSEUS_WALLET_CONTRACT_ADDRESSESS: require('../misc/constants/addresses'),
  OSSEUS_WALLET_CONTRACT_PATH: __dirname  + '/../misc/constants/addresses',
  OSSEUS_WALLET_ABI_PATH: __dirname + '/../misc/constants/abi/'
}
