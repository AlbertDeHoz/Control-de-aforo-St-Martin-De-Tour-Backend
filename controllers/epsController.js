const {EPS} = require('../models');

module.exports = {
    list: async (req,res) => {
        const eps = await EPS.findAll();
        res.status(200).json(eps)
    }
}