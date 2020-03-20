const express = require('express');

const router = express.Router();

const createUser = require('./newUser');
const ifExists = require('./ifExists')
const changePassword = require('./changePassword');
const listActivity = require('./listActivity');
const createActivity = require('./createActivity');

router.post('/users',createUser);
router.put('/users',ifExists);
router.put('/users/password',changePassword);


router.get('/user/activity',listActivity);
router.post('/user/activity',createActivity);



module.exports = router;