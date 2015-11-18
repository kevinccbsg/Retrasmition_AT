'use strict'
const express = require('express');
const router = express.Router();
const control = require('../controllers/control')


router.get('/',control.onRequest)
router.get('/newRoute',control.onSecondRequest)

module.exports = router;