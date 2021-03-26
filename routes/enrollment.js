const router = require('express').Router()
const enrollmentController = require('../controllers/enrollmentController')
const validator = require('../middleware/validator')

router.post('/register',validator.userInService ,validator.scheduleMatch,enrollmentController.register)
router.get('/code/:code',enrollmentController.listByCode)
router.get('/user/:idNumber',enrollmentController.listByIdNumber)
router.get('/attendance/:code',enrollmentController.attendance)
router.delete('/clearService',enrollmentController.clearService) //done
router.delete('/clearUserInService',enrollmentController.clearUserInService)
router.delete('/clearUser',enrollmentController.clearUser)
router.post('/matchDate', validator.scheduleMatch, (req,res)=> res.json({data:'valid'}))

module.exports = router