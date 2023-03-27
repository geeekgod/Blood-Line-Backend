const router = require('express').Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const { getConfigInfo } = require('./controllers');


router.get('/', getConfigInfo);

module.exports = router;
