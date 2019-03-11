const mongoose = require('mongoose');

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let profileSchema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,required:REQUIRED_VALIDATION_MESSAGE, ref:'User' },
    firstName:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    lastName:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    address:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    telephone:{type:mongoose.Schema.Types.String, required:REQUIRED_VALIDATION_MESSAGE},
    pets:[{type:mongoose.Schema.Types.ObjectId, ref:'Dog'}],
    walks:[{type:mongoose.Schema.Types.ObjectId, ref:'Walk'}],
    kennels:[{type:mongoose.Schema.Types.ObjectId, ref:'Cannel'}]
})

let Profile = mongoose.model('Profile',profileSchema);

module.exports = Profile
