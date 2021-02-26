const {Admin} = require('../models');
const bcrypt = require('bcryptjs');
const token = require('../services/token.js')

exports.login = async (req,res) => {
    const user = await Admin.findOne({where: {username:req.body.username} });
    if (user){
        isCorrect = await bcrypt.compareSync(req.body.password, user.password);
        if (isCorrect === true){
            const userToken = token.encodeAdmin(user);
            await res.status(200).json({userToken});
        }
        else {
            res.status(422).json({error:'invalid password'})
        }
    }
    else{
        res.status(404).json({error:'user Not Found'})
    }
}