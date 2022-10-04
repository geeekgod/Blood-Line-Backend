const router = require('express').Router();
const {
    createGoogleAuthUser,
    getGoogleAuth,
    googleSignin,
} = require('./controllers')

router.post('/signin', googleSignin);
router.get('/google', getGoogleAuth);
router.post('/google/callback', createGoogleAuthUser);

module.exports = router;