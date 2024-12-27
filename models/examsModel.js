const Joi = require('joi');
const mongoose = require('mongoose');


let therapistsSchema = new mongoose.Schema({
examCode:String,
examTypeCode:String , 
lastName:String , 
patientId ,
tCode:String ,
therapists: [{ type: ObjectId, ref: 'therapist' }]

})