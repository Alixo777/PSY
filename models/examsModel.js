const Joi = require('joi');
const mongoose = require('mongoose');


let therapistsSchema = new mongoose.Schema({
examCode:String,
examTypeCode:String , 
patientId:String ,
tCode:String ,
startDate:String ,
checkDate:String
})

exports.ExamsModel = mongoose.model("exams" , examsSchema)