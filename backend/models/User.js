const mongoose = require('mongoose');

const UserModel = mongoose.model("user",{

    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String}

})

module.exports = UserModel;