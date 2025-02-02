const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

let patientsSchema = new mongoose.Schema({
id:Number ,
firstName:String , 
lastName:String , 
age:Number ,
address:String,
email:String , 
password:String,
phoneNumber:String,
date_created:{
    type:Date , default:Date.now()
  },
      // הוספת יוצר הרשומה 
    user_id:String
})
//alexander
// אנחנו צריכים לייצא את המודל שבנוי משם הקולקשן אליו נרצה לשלוח מידע שיעבור בסכמה ומשם הסכמה עצמה
exports.PatientsModel = mongoose.model("patients" , patientsSchema)
// שם המודל חייב להתחיל עם אות גדולה + שם הקולקשן חייב להסתיים עם אס 
// TODO:
// Validation

// פונקציה שמייצרת טוקן 
exports.createToken = (user_id) => {
  // מייצר טוקן, שם תכולה - "מטען" - שלו שזה איי די של המשתמש
  // מילה סודית שרק לנו מותר להכיר אותה
  // ותוקף  
  let token = jwt.sign({_id:user_id},"PsySecret",{expiresIn:"60mins"})
  return token;
}

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


exports.validLogin = (_reqBody) => {
    let joiSchema = Joi.object({
      email:Joi.string().min(2).max(99).email().required(),
      password:Joi.string().min(3).max(99).required()
    })
  
    return joiSchema.validate(_reqBody);
  }