const Joi = require('joi');
const mongoose = require('mongoose');


let therapistsSchema = new mongoose.Schema({
examCode:String,
examTypeCode:String , 
lastName:String , 
age:Number ,
img:String,
therapists: [{ type: ObjectId, ref: 'therapist' }]

})