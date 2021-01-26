const router = require('express').Router();
const userController = require('../controllers/userController');
const {check} = require('express-validator');

const checkware = [
    check('id','The identification Number is obligatory').not().isEmpty(),
    check('firstName', 'The name is obligatory').not().isEmpty(),
    check('lastName', 'The lastname is obligatory').not().isEmpty(),
    check('phone', 'the cellphone number is obligatory').not().isEmpty(),
    check('age', 'Age shell is obligatory').not().isEmpty(),
    check('address', 'the adress is obligatory').not().isEmpty()
];

router.get('/list', userController.list);
router.post('/register',checkware,userController.register);
router.post('/signin', userController.signin);
router.put('/enable', userController.enable);
router.put('/disable', userController.disable);

router.get('/:id',userController.justOne);

module.exports = router;