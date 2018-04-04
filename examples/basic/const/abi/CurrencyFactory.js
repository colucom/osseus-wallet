module.exports = [{'constant': true, 'inputs': [{'name': '_token', 'type': 'address'}], 'name': 'supportsToken', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_newOwnerCandidate', 'type': 'address'}], 'name': 'requestOwnershipTransfer', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'address'}], 'name': 'currencyMap', 'outputs': [{'name': 'name', 'type': 'string'}, {'name': 'decimals', 'type': 'uint8'}, {'name': 'totalSupply', 'type': 'uint256'}, {'name': 'owner', 'type': 'address'}, {'name': 'mmAddress', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_token', 'type': 'address'}], 'name': 'openMarket', 'outputs': [{'name': '', 'type': 'bool'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'clnAddress', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'mmLibAddress', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'extractCLNfromMarketMaker', 'outputs': [{'name': '_clnTokenAmount', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '', 'type': 'uint256'}], 'name': 'tokens', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [], 'name': 'acceptOwnership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': true, 'inputs': [{'name': '_token', 'type': 'address'}], 'name': 'getMarketMakerAddressFromToken', 'outputs': [{'name': '_marketMakerAddress', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_token', 'type': 'address'}], 'name': 'insertCLNtoMarketMaker', 'outputs': [{'name': '_subTokenAmount', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_sender', 'type': 'address'}, {'name': '_value', 'type': 'uint256'}, {'name': '_data', 'type': 'bytes'}], 'name': 'tokenFallback', 'outputs': [{'name': 'ok', 'type': 'bool'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': true, 'inputs': [], 'name': 'newOwnerCandidate', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'view', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_name', 'type': 'string'}, {'name': '_symbol', 'type': 'string'}, {'name': '_decimals', 'type': 'uint8'}, {'name': '_totalSupply', 'type': 'uint256'}], 'name': 'createCurrency', 'outputs': [{'name': '', 'type': 'address'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_token', 'type': 'address'}, {'name': '_ccAmount', 'type': 'uint256'}], 'name': 'extractCLNfromMarketMaker', 'outputs': [{'name': '_clnTokenAmount', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_tokenAddress', 'type': 'address'}, {'name': '_amount', 'type': 'uint256'}], 'name': 'transferAnyERC20Token', 'outputs': [{'name': 'success', 'type': 'bool'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'constant': false, 'inputs': [{'name': '_token', 'type': 'address'}, {'name': '_clnAmount', 'type': 'uint256'}], 'name': 'insertCLNtoMarketMaker', 'outputs': [{'name': '_subTokenAmount', 'type': 'uint256'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function'}, {'inputs': [{'name': '_mmLib', 'type': 'address'}, {'name': '_clnAddress', 'type': 'address'}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'marketMaker', 'type': 'address'}], 'name': 'MarketOpen', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': 'token', 'type': 'address'}, {'indexed': true, 'name': 'owner', 'type': 'address'}], 'name': 'TokenCreated', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': '_by', 'type': 'address'}, {'indexed': true, 'name': '_to', 'type': 'address'}], 'name': 'OwnershipRequested', 'type': 'event'}, {'anonymous': false, 'inputs': [{'indexed': true, 'name': '_from', 'type': 'address'}, {'indexed': true, 'name': '_to', 'type': 'address'}], 'name': 'OwnershipTransferred', 'type': 'event'}]
