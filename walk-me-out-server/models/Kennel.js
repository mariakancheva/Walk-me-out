const mongoose = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let kennelSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, required: REQUIRED_VALIDATION_MESSAGE, ref: 'User' },
    dog: { type: mongoose.Schema.Types.ObjectId, required: REQUIRED_VALIDATION_MESSAGE, ref: 'Dog' },
    service: {
        type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE,
        enum: {
            values: ['Full board', 'Half board'],
            message: 'You can choose [Full board, Half board]'
        }, 
        default: 'Full board'
    },
    serviceNote:{type: mongoose.Schema.Types.Date, required: REQUIRED_VALIDATION_MESSAGE},
    food: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
    foodNote:{type: mongoose.Schema.Types.Date},
    medication: { type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE },
    medicationNote:{type: mongoose.Schema.Types.Date},
    startDate: { type: mongoose.Schema.Types.Date, required: REQUIRED_VALIDATION_MESSAGE },
    endDate:{ type: mongoose.Schema.Types.Date, required: REQUIRED_VALIDATION_MESSAGE },
    transport:{type: mongoose.Schema.Types.Date, required: REQUIRED_VALIDATION_MESSAGE},
    note:{type: mongoose.Schema.Types.Date }
})

let Kennel = mongoose.model('Kennel', kennelSchema);

module.exports = Kennel;