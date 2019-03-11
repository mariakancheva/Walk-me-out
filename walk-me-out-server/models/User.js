const mongoose = require('mongoose');
const encryption = require('../utilities/enryption');

const REQUIRED_VALIDATION_MESSAGE ='{PATH} is required'

let userSchema = new mongoose.Schema({
    email:{type:String, required:REQUIRED_VALIDATION_MESSAGE,unique:true},
    username:{type:String,required:REQUIRED_VALIDATION_MESSAGE},
    salt:String,
    password:String,
    roles:[String]
})

userSchema.method({
    authenticate:function (password){
        return encryption.generateHashedPassword(this.salt,password) === this.password
    }
})

let User = mongoose.model('User',userSchema);

module.exports = User

module.exports.seedAdmin = () => {
    User.find({}).then(users => {
        if(users.length >0) return

        let salt = encryption.generateSalt()
        let password = encryption.generateHashedPassword(salt,'123456')

        User.create({
            email:'admin@admin.com',
            username:'Admin',
            salt,
            password,
            roles:['Admin']
        })
    })
}