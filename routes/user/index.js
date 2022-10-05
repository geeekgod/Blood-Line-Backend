const router = require('express').Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {
    getUserInfo,
    updateUserInfo,
} = require('./controllers')


router.get('/', isLoggedIn, getUserInfo);

module.exports = router;