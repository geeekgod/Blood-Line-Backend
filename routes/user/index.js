const router = require('express').Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {
    getUserInfo,
} = require('./controllers')


router.get('/', isLoggedIn, getUserInfo);

module.exports = router;