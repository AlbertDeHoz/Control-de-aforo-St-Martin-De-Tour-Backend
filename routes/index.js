const router = require('express').Router();
const userRoute = require('./user');
const questionRoute = require('./question');

router.get('/',(req,res) => {
    res.send('hola');
})

router.use('/user',userRoute);
router.use('/question',questionRoute)

module.exports = router;