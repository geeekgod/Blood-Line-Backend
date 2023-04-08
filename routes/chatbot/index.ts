const router = require('express').Router();
const { sendQuery } = require('./controllers')

router.post('/', sendQuery);

export default router;
