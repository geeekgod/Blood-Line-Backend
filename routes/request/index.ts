const router = require('express').Router();
import isLoggedIn from '../../middlewares/isLoggedIn';
import { getRequests, createRequest, nearRequest, saveRequest, savedRequests } from './controllers';


router.get('/', isLoggedIn, getRequests);
router.get('/save', isLoggedIn, saveRequest);
router.get('/saved', isLoggedIn, savedRequests);
router.post('/', isLoggedIn, createRequest);
router.post('/near', isLoggedIn, nearRequest);

export default router;