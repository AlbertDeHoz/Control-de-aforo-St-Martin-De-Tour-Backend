const {Enrollment, User, Service} = require('../models');

const scheduleMatch = async (req,res,next) => {
    const response = await Enrollment.findOne({
        where: {
            idNumber: req.body.idNumber
        },
        include:{
            model:Service,
            required:true,
            attributes:['schedule']
        }
    })
    if(response){
        try{
            const validate = response.dataValues.Service.dataValues.schedule===req.body.schedule
            if(!validate ){
                next()
                //res.json({res:'no coinciden fechas'})
            }else{
                res.json({note:'ya registrado en el mismo dia'})
            }
        }catch(error){
            console.log('error')
        }
    }
    else{
         next()//res.json('puede que usuario no este en enrollment')
    }
}
const userInService = async (req,res,next) => {
    const response = await Enrollment.findOne({
        where: {
            idNumber: req.body.idNumber,
            code:req.body.code
        },
        include:{
            model:Service,
            required:true,
            attributes:['schedule']
        }
    })
    if(!response){
        next()
        //res.status(200).json({here: 'here'})
    }
    else{
        res.status(422).json({error: 'user registered'})
    }
}

module.exports = {
    scheduleMatch,
    userInService
}