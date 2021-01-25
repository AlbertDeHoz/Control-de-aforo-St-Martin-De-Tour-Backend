const {Question} = require('../models/index');

module.exports = {
    list: async (req, res) => {
        const questions = await Question.findAll();
        res.json(questions);
    },
    add: async (req, res) => {
        const question = await Question.create(req.body);
        res.status(200).json(question);
    }
}