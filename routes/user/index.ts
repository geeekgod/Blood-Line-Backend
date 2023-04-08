const router = require('express').Router();
import isLoggedIn from '../../middlewares/isLoggedIn';
import { getUserInfo } from './controllers';


router.get('/', isLoggedIn, getUserInfo);

export default router;