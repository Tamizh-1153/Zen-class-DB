const mongoose=require('mongoose')

const companyDrivesSchema=new mongoose.Schema({
    company_name:String,
    date:Date
})

module.exports=mongoose.model('companyDrives', companyDrivesSchema)