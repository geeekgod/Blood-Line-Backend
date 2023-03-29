const router = require('express').Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {
    getRequests, createRequest, nearRequest, saveRequest, savedRequests
} = require('./controllers');


router.get('/', isLoggedIn, getRequests);
router.get('/save', isLoggedIn, saveRequest);
router.get('/saved', isLoggedIn, savedRequests);
router.post('/', isLoggedIn, createRequest);
router.post('/near', isLoggedIn, nearRequest);

module.exports = router;