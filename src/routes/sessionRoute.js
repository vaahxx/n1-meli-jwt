const router = require('express').Router();
const controller = require('../controllers/sessionController');

router.post('/', controller.getToken);

module.exports = router;