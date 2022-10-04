const router = require('express').Router();
const {
    getUserInfo,
    updateUserInfo,
} = require('./controllers')

const {
    isLoggedIn
} = require('./middlewares');

router.get('/', isLoggedIn, getUserInfo);
router.patch('/', isLoggedIn, updateUserInfo);

module.exports = router;