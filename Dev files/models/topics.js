const mongoose = require("mongoose")

const topicsSchema = new mongoose.Schema({
  name: String,
  date: Date,
})

module.exports = mongoose.model("Topics", topicsSchema)
