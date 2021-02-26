const router = require('express').Router();
const idTypeController = require('../controllers/idTypeController');

router.get('/list',idTypeController.list)

module.exports = router;