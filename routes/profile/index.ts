const router = require('express').Router();
import isLoggedIn from '../../middlewares/isLoggedIn';
import { getProfileInfo, createProfile } from './controllers';


router.get('/', isLoggedIn, getProfileInfo);
router.post('/', isLoggedIn, createProfile);

export default router;