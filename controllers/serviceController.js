const {Service} = require('../models');

module.exports ={
    async getService (req,res) {
        const service = await Service.findOne({ where: {id:1}});
        res.status(200).json(service)
    },
    async setServices (req,res) {
        const service = await Service.update(req.body, { where:{ id:1 } } );
        res.status(200).json(service)
    },
    async getServices (req,res) {
        const services = await Service.findAll();
        res.status(200).json(services)
    }
}