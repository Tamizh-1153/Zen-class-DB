const mongoose = require("mongoose")


const tasksSchema = new mongoose.Schema({
  name: String,
  date: Date,
  notSubmitted:Array
})

module.exports = mongoose.model("Tasks", tasksSchema)