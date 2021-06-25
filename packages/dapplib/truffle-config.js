require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind hospital guess clog tail gesture'; 
let testAccounts = [
"0xbdd17dbcd5f272457ea09863e88ccaf1b4be2f2006caaf8733af03da44ed11a1",
"0x4a975a4ab151c199fc04963fa6b40ee44db2e023888e34bddf04a8f856e9772e",
"0x78b87fc71ec669f92363eaae4f8ef2df0c335e9a2fe0a6482a8c7975c94bc222",
"0x49919d2fccf9e68158ab1196bc0306e06bc6d01abb1daa5c3a3675659807dd8b",
"0x91a91fb66f3bab772616427c29c8701d705b98032452dc3ac24e401af8b12dc4",
"0xc64b75d77b6b74cb51bb3ca0ff88dc29037c52c67fc7d6bc157a0e98cf514ff4",
"0x926c50818f6ae5b3e83309e7135cd8cb285a6f166a7d38d76724157172f7a6e3",
"0xa25282d9c5543675168c539b74645bf16aac3f2a0d3e332c4f439f687ce4960a",
"0xd96389ef66e231541684329fdcd6b382d9d70570306a43743541e571d531f0e9",
"0x6657a20ef3f5b50a406f226bef2ced6382f14a4c61785ffd35ac68ab7c7f52fa"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

