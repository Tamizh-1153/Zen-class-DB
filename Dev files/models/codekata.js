const mongoose= require('mongoose')
const Users = require('./user')

const codekataSchema=new mongoose.Schema({
    name:{
        type:mongoose.SchemaTypes.String,
        ref:'Users',
        required:true
    },
    problemSolved:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Codekata',codekataSchema)