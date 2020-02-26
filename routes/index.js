const express = require('express');

const router = express.Router();

const createUser = require('./newUser');
const ifExists = require('./ifExists')

router.post('/users',createUser);
router.put('/users',ifExists);

module.exports = router;