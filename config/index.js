const dotenv = require('dotenv');

const envFound = dotenv.config();
if (envFound.error) {
    //.env 파일 에러 확인
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const config = {
    publicKey: process.env.PUBLICKEY,
    privateKey: process.env.PRIVATEKEY,

    transaction: process.env.TRANSACTION
}

module.exports = config;
