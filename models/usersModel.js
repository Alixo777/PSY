const Joi = require('joi');
const mongoose = require('mongoose');

let usersSchema = new mongoose.Schema({
name:String , 
lastName:String , 
age:Number ,
img:String
})

// אנחנו צריכים לייצא את המודל שבנוי משם הקולקשן אליו נרצה לשלוח מידע שיעבור בסכמה ומשם הסכמה עצמה
exports.UsersModel = mongoose.model("users" , usersSchema)
// שם המודל חייב להתחיל עם אות גדולה + שם הקולקשן חייב להסתיים עם אס 
// TODO:
// Validation


exports.validateUser = (reqBody) => {
    const joiSchema = Joi.object({
      name: Joi.string().min(3).max(99).required(),  // Fixed to string
      lastName: Joi.string().min(3).max(99).required(),
      age: Joi.number().min(18).max(120).required(),
      img: Joi.string().optional()  // Optional string field for image
    });
  
    return joiSchema.validate(reqBody);  // Use reqBody to validate
  }