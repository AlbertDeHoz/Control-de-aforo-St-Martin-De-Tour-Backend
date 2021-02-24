const router = require('express').Router();
const userController = require('../controllers/userController');
const {check} = require('express-validator');

const checkware = [
    check('firstName', 'The name is obligatory').not().isEmpty(),
    check('EpsName', 'Eps information is required').not().isEmpty(),
    check('lastName', 'The lastname is obligatory').not().isEmpty(),
    check('phone', 'the cellphone number is obligatory').not().isEmpty(),
    check('birth', 'birth shell is obligatory').not().isEmpty(),
    check('address', 'the adress is obligatory').not().isEmpty()
];

router.get('/list', userController.list);
router.post('/register',checkware,userController.register);
router.post('/signin', userController.signin);
router.put('/enable', userController.enable);
router.put('/disable', userController.disable);
router.put('/null',userController.null);
router.put('/setAllUserNull',userController.setAllUserNull);
router.put('/birth', userController.setUserBirth)
router.get('/countuser',userController.countUsers)
router.put('/update/:id',userController.setUser)

module.exports = router;