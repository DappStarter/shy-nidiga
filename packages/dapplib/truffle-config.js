require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure system north cruise outside champion coral light army gate'; 
let testAccounts = [
"0x3cfeb796be997bc58632142cea2d8de5979ff3ec3d7df9e441498a074360fa6c",
"0x7df06d4a1c1ca72c64970090ee058fe58b2a45815c758a4d2f4ca6f963d9ef60",
"0xed99b0ae7889f4adaca751900c75ac4a9398fa6ac29a918e06fb10986b4bcc9c",
"0x05218313596da0612f363ac21409bfc6e7fc9203ff2d54ca933140ed33cf541e",
"0xd6bf6a75168a94ee89dd2132d05440613464807360981a869e3eab92ef8d9524",
"0xbcdd28bafb6b2242b8a6d2bc39034fbc9ab4d0cd2eb32bcba7dcc284ca2c6340",
"0x68ea15ef4bd93b1d861d700bccb705bd20a79d1acbe9ab7a86fb39079de5bdd2",
"0x4fd9bd12a89b708aa613213f148bc42575e4dee799209f3c536cf13952339059",
"0x349f0d7c4b14c42683f67897dcff4b05033cebdeea7fcf962a5f7ab5984c0de0",
"0x55c5c0ce5097e889539280832c6cd4544d50adad43f2212a20bafb2a25091cda"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

