const {User,EPS} = require('../models');
const {validationResult} = require('express-validator');
const token = require('../services/token')
const { Op } = require("sequelize");

const usernames = [
    'Alan',
    'Maria',
    'Germán'
]

exports.list = async (req,res) => {
    const user = await User.findAll(
        //{
        //    include:{
        //        model: EPS,
        //        as:'epsName',
        //        required: true,
        //        attributes:['codigo','epsName']
        //    }
        //}
    );
    return res.json(user)
};

exports.justOne = (req,res) => {
    res.json(usernames[req.params.id]);
    //res.json(usernames['nombre2'])
}

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

exports.setAllUserNull = async (req, res) => {
    const update = await User.update({enable: null},{where:{
        enable:{
            [Op.not]: null
        }
    }})
    res.status(200).json(update);
}