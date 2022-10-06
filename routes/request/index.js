const router = require('express').Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {
    getRequests
} = require('./controllers')


router.get('/', isLoggedIn, getRequests);
// router.post('/', isLoggedIn, createProfile);

module.exports = router;