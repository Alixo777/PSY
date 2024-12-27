const Joi = require('joi');
const mongoose = require('mongoose');


let therapistsSchema = new mongoose.Schema({
diagnoseTypeCode:String,
examTypeCode:String , 
patientId:String ,
tCode:String ,
startDate:String,
conclusionD:String
})

exports.DiagnosesModel = mongoose.model("diagnoses" , diagnosesSchema)