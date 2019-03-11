const mongoose = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let walkSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,required:REQUIRED_VALIDATION_MESSAGE, ref:'User' },
    dog:{type:mongoose.Schema.Types.ObjectId,required:REQUIRED_VALIDATION_MESSAGE, ref:'Dog' },
    duration:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    place:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    date:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    time:{type:mongoose.Schema.Types.String,required:REQUIRED_VALIDATION_MESSAGE}
    
})

let Walk = mongoose.model('Walk',walkSchema);

module.exports = Walk;