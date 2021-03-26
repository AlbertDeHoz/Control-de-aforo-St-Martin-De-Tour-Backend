const router = require('express').Router()
const serviceController = require('../controllers/serviceController');
const middleware = require('../middleware/auth.js')

router.get('/',serviceController.getService);
router.get('/list',serviceController.getServices)
router.put('/update',middleware.verify,serviceController.setServices);

module.exports = router