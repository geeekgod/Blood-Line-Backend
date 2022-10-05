const router = require('express').Router();
const { googleSignin } = require('./controllers')

router.post('/googleAuth', googleSignin);
// router.get('/google', getGoogleAuth);
// router.post('/google/callback', createGoogleAuthUser);

module.exports = router;