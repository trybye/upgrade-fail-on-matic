
const HDWalletProvider = require('@truffle/hdwallet-provider');
const result = require('dotenv').config();
if (result.error) {
    throw result.error;
}

// console.log(process.env.mnemonic);
// async function gas() {
//     url = `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.infura}`
//     price =await axios.get(url)
//     console.log(price)
// }


module.exports = {
    plugins: ['truffle-plugin-verify'],
    etherscan: {
        apiKey: process.env.apiKey //replace this with your API key if you have one
    },
    api_keys: {
        etherscan: process.env.apiKey //verify etherscan 
    },
    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache-cli, geth or parity) in a separate terminal
        // tab if you use this network and you must also set the `host`, `port` and `network_id`
        // options below to some value.
        //
        development: {
            host: "127.0.0.1", // Localhost (default: none)
            port: 7545, // Standard Ethereum port (default: none)
            network_id: "*", // Any network (default: none)
        },
        // Another network with more advanced options...
        // advanced: {
        // port: 8777,             // Custom port
        // network_id: 1342,       // Custom network
        // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
        // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
        // from: <address>,        // Account to send txs from (default: accounts[0])
        // websockets: true        // Enable EventEmitter interface for web3 (default: false)
        // },
        // Useful for deploying to a public network.
        // NB: It's important to wrap the provider as a function.
        mainnet: {
            provider: () => new HDWalletProvider(process.env.mnemonic, `https://mainnet.infura.io/v3/${process.env.infura}`),
            network_id: 1, // Ropsten's id
            gas: 2000000, // Ropsten has a lower block limit than mainnet
            gasPrice: '30000000000', //
            confirmations: 0, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 20000, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
        },
        ropsten: {
            provider: () => new HDWalletProvider(process.env.mnemonictest, `https://ropsten.infura.io/v3/${process.env.infura}`),
            network_id: 3, // Ropsten's id
            gas: 5500000, // Ropsten has a lower block limit than mainnet
            gasPrice: '3000000000',
            confirmations: 0, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 20000, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
        },
        kovan: {
            provider: () => new HDWalletProvider(process.env.mnemonictest, `https://kovan.infura.io/v3/${process.env.infura}`),
            network_id: 42, // Ropsten's id
            gas: 5500000, // Ropsten has a lower block limit than mainnet
            gasPrice: '1000000000',
            confirmations: 0, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 20000, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
            networkCheckTimeout:999999
        },
        rinkeby: {
            provider: () => new HDWalletProvider(process.env.mnemonictest, `https://rinkeby.infura.io/v3/${process.env.infura}`),
            network_id: 4, // Ropsten's id
            gas: 5500000, // Ropsten has a lower block limit than mainnet
            gasPrice: '1000000000',
            confirmations: 0, // # of confs to wait between deployments. (default: 0)
            timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
        },
    
          mumbai:{
            provider: () => new HDWalletProvider(process.env.mnemonicPolygonMumbai, `https://rpc-mumbai.maticvigil.com/v1/6010fbb18f8b4fb582fd1b830a43c90d19782eeb`),
            network_id: 80001,
            chain_id:80001,
            // gas:4294967295,
            // gas:10000000,
            confirmations: 0,
            timeoutBlocks: 20000000,
            skipDryRun: true
          },
          matic:{
            provider: () => new HDWalletProvider(process.env.mnemonicPolygonMatic, `https://rpc-mainnet.maticvigil.com`),
            network_id: 137,
            gas:10000000,
            // gasPrice: '20000000000',
            confirmations: 0,
            timeoutBlocks: 200,
            skipDryRun: true
          }
        // Useful for private networks
        // private: {
        // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
        // network_id: 2111,   // This network is yours, in the cloud.
        // production: true    // Treats this network as if it was a public net. (default: false)
        // }
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.6.12", // Fetch exact version from solc-bin (default: truffle's version)
            // version: "0.5.17",
            // version:'0.5.12',
            // version:'0.4.18',
            docker: false, // Use "0.5.1" you've installed locally with docker (default: false)
            settings: { // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 200
                },
                evmVersion: "" //byzantium
            }
        },
    },
};