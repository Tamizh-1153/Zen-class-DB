const mongoose = require('mongoose')

const mentorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mentee:{
        type:Array,
        required:true
    }
})

module.exports=mongoose.model('Mentors',mentorSchema)