const {User,EPS} = require('../models');
const {validationResult} = require('express-validator');
const token = require('../services/token')
const { Op, fn, col } = require("sequelize");


exports.list = async (req,res) => {
    const user = await User.findAll();
    return res.json(user)
};

exports.register = async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors:errors.array()});
    };
    const userExist =  await User.findOne({ where : { idNumber: req.body.idNumber}});
    if (!userExist){
        const user = await User.create(req.body);
        res.json(user);
    }
    else {
        res.status(422).json({error:'user already exists'})
    }
}

exports.signin = async (req, res, next) => {
    const user =  await User.findOne({ where : {idNumber: req.body.idNumber}});  
    try{
        if (user){
            if(user.idType === req.body.idType){
                const tokenUser = token.encode(user);
                res.status(200).json({tokenUser})
            }
            else{
                res.status(402).json({error:'Not Coincidence'})
            }
        }
        next();
    }catch(error){
        res.status(404).send('User Not Found');
    }
}

exports.enable = async (req, res) => {
    try{
        const {idNumber} = await User.findOne({where : {idNumber: req.body.idNumber}});
        const user = await User.update({enable:true},{where: {idNumber:idNumber}});
        res.status(200).json(user);
    }catch(err) {
        res.status(404).json({error:'something is wrong'})
    }
};

exports.disable = async (req, res) => {
    try{
        const {idNumber} = await User.findOne({where : {idNumber: req.body.idNumber}});
        const user = await User.update({enable:false},{where: {idNumber:idNumber}});
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({error:'something is wrong'})
    }
}

exports.null = async (req, res) => {
    try{
        const {idNumber} = await User.findOne({where : {idNumber: req.body.idNumber}});
        const user = await User.update({enable: null},{where: {idNumber:idNumber}});
        res.status(200).json(user);
    }catch(err){
        res.status(404).json({error:'something is wrong'})
    }
}

exports.setUserBirth = async (req, res) => {
    const {birth,idNumber} = await User.findOne({where: {idNumber:req.body.idNumber}});
    if (birth===null) {
        const response = await User.update({birth:req.body.birth},{where: {idNumber:idNumber}});
        res.status(200).json({response:'null'})
    }
    else {
        res.status(200).json({response:'not null'})
    }
}

exports.setAllUserNull = async (req, res) => {
    const update = await User.update({enable: null},{where:{
        enable:{
            [Op.eq]: true
        }
    }})
    res.status(200).json(update);
}

exports.countUsers = async (req, res) => {
    const user = await User.findAll(
        {
            where:{enable:true},
            attributes:['enable', [fn('count', col('enable')),'conteo']],
            group: ["enable"]
        }
    )
    res.status(200).json(user)
}

exports.setUser = async (req, res) => {
    //const {id} = await User.findOne({where:{ id : req.body.id}})
    const userUpdate = await User.update(req.body,{where:{id:req.params.id} })
    res.status(200).json(userUpdate)
}