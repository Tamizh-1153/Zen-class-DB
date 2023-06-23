const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    name:String,
    appearedForPlacement:Boolean,
})





module.exports = mongoose.model('Users',userSchema)

