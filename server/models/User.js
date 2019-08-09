const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { generatePass } = require('../helpers/encryptPass')

const UserSchema = new Schema({
    username : String,
    email : String,
    password : String
},{
    timestamps : true,
    versionKey :false
})

UserSchema.pre('save', function(next){
    
    let password = generatePass (this.password)
    this.password = password
    next()

})

const User = mongoose.model("User", UserSchema)








module.exports = User