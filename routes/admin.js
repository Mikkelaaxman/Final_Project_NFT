var express = require('express');
var path = require('path');

var router = express.Router();

var contracts = [];

router.get('/api/contracts', (req, res) => {
    contracts = {
        1: {address:"0xE3435EdBf54b5126E817363900234AdFee5B3cee", tokenID:"091"},
        2: {address:"0xE3435EdBf5dkfnslcvjsdnflsvsldkfslkdfjsdl", tokenID:"817"},
        3: {address:"0xdjdkdcmsmlkskkkjkj17363900234AdFee5B3cee", tokenID:"236"},
        4: {address:"0xE3435EdBf54b53839hddiushsyu9282iejdcjsjd", tokenID:"461"},
    };
    res.send(contracts);
});

router.post('api/contracts', (req, res) => {
    id = Object.keys(contracts) + 1;
    contracts[id] = req.body;
    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;
