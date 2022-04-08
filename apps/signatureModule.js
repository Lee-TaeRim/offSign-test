'use strict';

const config = require('../config');

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(config.testnet));

const transaction = require(config.transaction);

class SignatureModule {
    async signTransaction() {
        return new Promise((resolve) => {
            web3.eth.accounts.signTransaction(transaction, config.privateKey)
            .then(resolve);
        });
    }
}

module.exports = SignatureModule;
