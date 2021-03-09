const Batch = require('../models/batch');

const batchController = {};

batchController.getAll = async (req, res) => {
    try{
        const batches = await Batch.find({}).exec();
        return res.json(batches);
    } catch (error) {
        console.log(error);
        return res.send(error);
    }
}

batchController.create = async (req, res) => {
    console.log(req.body)
    const {number, size, color, quantity} = req.body;
    try {
        const batch = await Batch.create({number, size, color, quantity});
        return res.status(201).send(batch);
    }catch (error) {
        console.log(error);
        return res.send("Validation Error!");
    } 
}

module.exports = batchController;