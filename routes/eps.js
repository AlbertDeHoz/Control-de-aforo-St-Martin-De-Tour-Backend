const router = require('express').Router()
const epsController = require('../controllers/epsController');

router.get('/list',epsController.list)

module.exports= router