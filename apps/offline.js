'use strict';

const SignatureModule = require('./signatureModule');
const fs = require('fs');

exports.home = (req, res) => {
    // 테스트용 코드

    /*
    const signatureModule = new SignatureModule();

    signatureModule.signTransaction()
    .then(function(res){
        let obj = JSON.stringify(res.rawTransaction);
        fs.writeFileSync('./signedTransaction.json', obj, 'utf-8');
        console.log(res);
    });
    */
   
    res.render("offline");
}
