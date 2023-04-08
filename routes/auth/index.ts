const router = require('express').Router();
import { googleSignin } from './controllers';

router.post('/googleAuth', googleSignin);

export default router;