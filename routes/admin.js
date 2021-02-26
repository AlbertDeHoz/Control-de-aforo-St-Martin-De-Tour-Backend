const router = require('express').Router();
const adminController = require('../controllers/admincontroller')

router.post('/login',adminController.login)

module.exports = router