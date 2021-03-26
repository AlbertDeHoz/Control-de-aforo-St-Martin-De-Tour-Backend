const router = require('express').Router();
const userRoute = require('./user');
const questionRoute = require('./question');
const epsRoute = require('./eps');
const idTypeRoute = require('./idType');
const adminRoute = require('./admin')
const serviceRoute = require('./service');
const enrollmentRoute = require('./enrollment');


router.use('/user',userRoute);
router.use('/question',questionRoute);
router.use('/eps',epsRoute);
router.use('/type',idTypeRoute);
router.use('/admin',adminRoute);
router.use('/service',serviceRoute);
router.use('/enrollment', enrollmentRoute);

module.exports = router;