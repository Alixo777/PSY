const Joi = require('joi');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

let therapistsSchema = new mongoose.Schema({
  tCode: String,
  firstName: String,
  lastName: String,
  img: String,
  patients: [{ type: ObjectId, ref: 'patients' }] // Array of ObjectId referencing 'patients' collection
});

// Model export
exports.therapistsSchema = mongoose.model("Therapists", therapistsSchema);

// Validation function
exports.validateUser = (reqBody) => {
  const joiSchema = Joi.object({
    tCode: Joi.string().required().min(3).max(20), // tCode is required and has length constraints
    firstName: Joi.string().required().min(2).max(50), // firstName is required, length between 2-50
    lastName: Joi.string().required().min(2).max(50), // lastName is required, length between 2-50
    img: Joi.string().uri().optional(), // img is optional and should be a valid URI if present
    patients: Joi.array().items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/)).optional(), // Array of ObjectId strings (patient references)
  });

  return joiSchema.validate(reqBody); // Validate the reqBody using the schema
};
