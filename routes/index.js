const router = require("express").Router();
const authRouter = require('./auth');
const userRouter = require('./user');
const profileRouter = require('./profile');

router.use('/api/auth', authRouter);
router.use('/api/user', userRouter);
router.use('/api/profile', profileRouter);

module.exports = router;