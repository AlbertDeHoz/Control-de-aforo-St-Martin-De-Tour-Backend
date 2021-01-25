const router = require('express').Router();
const questionController = require('../controllers/questionController');

router.get('/list',questionController.list)
router.post('/add',questionController.add)

module.exports = router;