const Joi = require('joi');
const mongoose = require('mongoose');

let patientsSchema = new mongoose.Schema({
id:Number ,
firstName:String , 
lastName:String , 
age:Number ,
address:String,
email:String , 
phoneNumber:String
})
//alexander
// אנחנו צריכים לייצא את המודל שבנוי משם הקולקשן אליו נרצה לשלוח מידע שיעבור בסכמה ומשם הסכמה עצמה
exports.PatientsModel = mongoose.model("patients" , patientsSchema)
// שם המודל חייב להתחיל עם אות גדולה + שם הקולקשן חייב להסתיים עם אס 
// TODO:
// Validation

exports.validatePatient = (reqBody) => {
    let joiSchema = Joi.object({
        id:Joi.number().min(100000000).max(999999999).required() ,
        firstName:Joi.string().min(3).max(99).required() , 
        lastName:Joi.string().min(3).max(99).required() , 
        age:Joi.number().min(18).max(120).required() ,
        address:Joi.string().required(),
        email:Joi.string().required() , 
        phoneNumber:Joi.string().required()
    });

    return joiSchema.validate(reqBody)
}