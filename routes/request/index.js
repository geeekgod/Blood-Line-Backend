const router = require('express').Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {
    getRequests, createRequest, saveRequests, deleteSavedRequest
} = require('./controllers')


router.get('/', isLoggedIn, getRequests);
router.post('/', isLoggedIn, createRequest);
router.post('/save', isLoggedIn, saveRequests);
router.delete('/save', isLoggedIn, deleteSavedRequest);

module.exports = router;