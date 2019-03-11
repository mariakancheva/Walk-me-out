const mongoose = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let dogSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,required:REQUIRED_VALIDATION_MESSAGE, ref:'User' },
    name:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    breed:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    age:{type:mongoose.Schema.Types.Number, required:REQUIRED_VALIDATION_MESSAGE},
    weight:{type:mongoose.Schema.Types.Number, required:REQUIRED_VALIDATION_MESSAGE},
    //Health status
    castration:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    desease:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    //Character
    character:{type:mongoose.Schema.Types.String,required:REQUIRED_VALIDATION_MESSAGE}
    
})

let Dog = mongoose.model('Dog',dogSchema);

module.exports = Dog