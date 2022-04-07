console.log(`${__filename}:1`);

const express = require('express');

const router = express.Router();

const RouterUtil = require('../../utils/RouterUtil');
const wrapTryCatch = RouterUtil.wrapTryCatch;


router.get('/', wrapTryCatch(async (req, res) => {
    console.log("hello test!");

    res.renderJson({
        text: "hello test!"
    });
}));


module.exports = router;