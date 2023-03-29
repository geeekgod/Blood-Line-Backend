const router = require("express").Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const profileRouter = require('./profile');
const requestRouter = require('./request');
const configRouter = require('./config');

router.use('/api/auth', authRouter);
router.use('/api/user', userRouter);
router.use('/api/profile', profileRouter);
router.use('/api/request', requestRouter);
router.use('/api/config', configRouter);

module.exports = router;
