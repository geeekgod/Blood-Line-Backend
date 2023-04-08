const router = require("express").Router();
import authRouter from './auth';
import userRouter from './user';
import profileRouter from './profile';
import requestRouter from './request';
import configRouter from './config';
import chatbotRouter from './chatbot';

router.use('/api/auth', authRouter);
router.use('/api/user', userRouter);
router.use('/api/profile', profileRouter);
router.use('/api/request', requestRouter);
router.use('/api/config', configRouter);
router.use('/api/chatbot', chatbotRouter)

export default router;
