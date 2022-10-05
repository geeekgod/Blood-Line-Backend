const router = require('express').Router();
const { googleSignin } = require('./controllers')

router.post('/googleAuth', googleSignin);

module.exports = router;