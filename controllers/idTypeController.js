const {IdType} = require('../models');

module.exports = {
    list: async (req,res) => {
        const listId = await IdType.findAll();
        res.status(200).json(listId)
    }
}