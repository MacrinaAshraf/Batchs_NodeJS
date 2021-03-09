const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    number: {type: Number, unique: true, required: true, min: 1},
    size: {type: String, required: true, enum: ["S", "M", "L", "XL"]},
    color: {type: String, required: true, enum: ["red", "blue", "black", "green"]},
    quantity: {type: Number, required: true},
});

const Batch = mongoose.model('batch', batchSchema);

module.exports = Batch;