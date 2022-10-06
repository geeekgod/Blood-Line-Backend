const router = require('express').Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {
    getProfileInfo, createProfile,
} = require('./controllers')


router.get('/', isLoggedIn, getProfileInfo);
router.post('/', isLoggedIn, createProfile);

module.exports = router;