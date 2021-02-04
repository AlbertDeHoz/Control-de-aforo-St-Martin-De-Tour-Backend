const router = require('express').Router();
const userRoute = require('./user');
const questionRoute = require('./question');
const epsRoute = require('./eps');
const idTypeRoute = require('./idType')

router.get('/',(req,res) => {
    res.send('hola');
})

router.use('/user',userRoute);
router.use('/question',questionRoute)
router.use('/eps',epsRoute)
router.use('/type',idTypeRoute)

module.exports = router;