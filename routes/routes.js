const router = require('express').Router();
const { createSubscription } = require('../controller/subscription.controller');
router.post('/create/subscription',createSubscription);
module.exports = router;