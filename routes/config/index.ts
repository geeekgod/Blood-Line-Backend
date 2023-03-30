const router = require('express').Router();
import isLoggedIn from '../../middlewares/isLoggedIn';
import { getConfigInfo } from './controllers';

router.get('/', getConfigInfo);

export default router;
