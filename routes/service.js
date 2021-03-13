const router = require('express').Router()
const servicecontroller = require('../controllers/serviceController');
const middleware = require('../middleware/auth.js')

router.get('/',servicecontroller.getServices);
router.put('/update',middleware.verify,servicecontroller.setServices);

module.exports = router