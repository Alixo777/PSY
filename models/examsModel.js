const Joi = require('joi');
const mongoose = require('mongoose');


let therapistsSchema = new mongoose.Schema({
examCode:String,
examTypeCode:String , 
lastName:String , 
patientId ,
img:String,
therapists: [{ type: ObjectId, ref: 'therapist' }]

})