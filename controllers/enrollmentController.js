const {Enrollment, User, Service} = require('../models/')
const {col, fn} = require('sequelize')


const register  = async (req, res)=>{
    const user = await User.findOne({where:{ idNumber:req.body.idNumber}});
    const service = await Service.findOne({where:{ code:req.body.code }});
    if (!user || !service){
        res.status(404).json({error:'credential not found'})
    }else{
            const user = await Enrollment.create( req.body )
            res.status(200).json(user)
    }
}
const listByIdNumber = async (req, res) =>{
    const user = await User.findOne({where:{idNumber:req.params.idNumber}})
    if (user){
        const userList = await Enrollment.findAll({
            where:{idNumber:req.params.idNumber},
            include:{
                model:Service,
                required:true,
                attributes:['name','hour']
            }
        })
        res.status(200).json(userList)
    }else {
        res.status(404).send('not found')
    }
}
const listByCode = async (req,res) =>{
    const code = await Enrollment.findAll({
        where:{code:req.params.code},
        include:{
            model:Service,
            required:true,
            attributes:['schedule']
        }
    })
    res.status(200).json(code)
}

const attendance = async(req,res) =>{
    const attendance = await Enrollment.findAll(
        {
            where:{code:req.params.code},
            attributes:['code', [fn('count', col('code')),'conteo']],
            group: ["code"]
        }
    )
    res.status(200).json(attendance)
}

const clearService = async(req,res) =>{
    const service = Enrollment.destroy({where:{code:req.body.code}})
    res.status(200).json(service)
}
const clearUserInService = async(req,res) =>{
    const user = await Enrollment.findOne({where:{
        idNumber : req.body.idNumber,
        code: req.body.code
    }})
    if (!user){
        res.status(404).json({error:'coincidence not found'})
    }else{
        const del = await Enrollment.destroy({where:{
            idNumber : req.body.idNumber,
            code: req.body.code
        }})
        res.status(200).json(del)
    }
}
const clearUser = async (req,res) =>{
    const user = await Enrollment.findOne({where:{
        idNumber : req.body.idNumber
    }})
    if (!user){
        res.status(404).json({error:'coincidence not found'})
    }else{
        const del = await Enrollment.destroy({where:{
            idNumber : req.body.idNumber
        }})
        res.status(200).json(del)
    }
}
module.exports = {
    register, 
    listByIdNumber, 
    listByCode, 
    attendance, 
    clearService,
    clearUserInService,
    clearUser
}