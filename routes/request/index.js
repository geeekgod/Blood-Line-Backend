const router = require('express').Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {
    getRequests, createRequest
} = require('./controllers')


router.get('/', isLoggedIn, getRequests);
router.post('/', isLoggedIn, createRequest);

module.exports = router;