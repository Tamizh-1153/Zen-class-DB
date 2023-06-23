const mongoose = require('mongoose')

const attendanceSchema=new mongoose.Schema({
    date:Date,
    present:Array,
    absent:Array

})

module.exports=mongoose.model('Attendance',attendanceSchema)