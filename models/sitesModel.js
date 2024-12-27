const Joi = require('joi');
const mongoose = require('mongoose');

let sitesSchema = new mongoose.Schema({
  name:String,
  url:String,
  image:String,
  score:Number
})

// אנחנו צריכים לייצא את המודל שבנוי משם הקולקשן אליו נרצה לשלוח מידע שיעבור בסכמה ומשם הסכמה עצמה
exports.SitesModel = mongoose.model("sites" , sitesSchema)
// שם המודל חייב להתחיל עם אות גדולה + שם הקולקשן חייב להסתיים עם אס 
// TODO:
// Validation


exports.validateSite = (reqBody) => {
    const joiSchema = Joi.object({
      name: Joi.string().min(2).max(50).required(),  
      url: Joi.string().min(5).max(200).required(),
      image: Joi.string().min(5).max(300).required(),
      score: Joi.number().min(0).max(10).required()  
    });
  
    return joiSchema.validate(reqBody);  // Use reqBody to validate
  }