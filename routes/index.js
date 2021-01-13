const router = require('express').Router();
const userRoute = require('./user')

router.get('/',(req,res) => {
    res.send('hola');
})

router.use('/user',userRoute)

module.exports = router;