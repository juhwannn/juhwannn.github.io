console.log(`${__filename}:1`);

const express = require('express');
const router = express.Router();

const RouterUtil = require('../../utils/RouterUtil');
const wrapTryCatch = RouterUtil.wrapTryCatch;


router.use('/test', require('./test'));
router.use('/auth', require('./auth'));

module.exports = router;
