const {Admin} = require('../models');
const bcrypt = require('bcryptjs')

exports.login = async (req,res) => {
    //const user = await Admin.findOne({where: {username:req.body.username} });
    //if(user){
    //    res.status(200).json({notError:'here'})
    //}
    //else{
    //    es.status(200).json({error:'helse'})
    //}


    const user = await Admin.findOne({where: {username:req.body.username} });
    if (user){
        isCorrect = await bcrypt.compareSync(req.body.password, user.password);
        if (isCorrect === true){
            await res.status(200).json(user)
        }
        else {
            res.status(422).json({error:'invalid password'})
        }
    }
    else{
        res.status(404).json({error:'user Not Found'})
    }
}