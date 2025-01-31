require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/clinicDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Patient Schema with Password
const patientSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true }
});

const PatientModel = mongoose.model("patients", patientSchema);

// Joi Validation Schema
const validatePatient = (data) => {
    const schema = Joi.object({
        id: Joi.number().min(100000000).max(999999999).required(),
        firstName: Joi.string().min(3).max(99).required(),
        lastName: Joi.string().min(3).max(99).required(),
        age: Joi.number().min(18).max(120).required(),
        address: Joi.string().required(),
        email: Joi.string().email().required(),
        phoneNumber: Joi.string().required(),
        password: Joi.string().min(6).max(1024).required()
    });
    return schema.validate(data);
};

// Register Patient
app.post("/register", async (req, res) => {
    // Validate request body
    const { error } = validatePatient(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        // Check if email already exists
        let existingPatient = await PatientModel.findOne({ email: req.body.email });
        if (existingPatient) return res.status(400).send("Email already registered");

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new patient
        let newPatient = new PatientModel({
            ...req.body,
            password: hashedPassword
        });

        await newPatient.save();

        // Generate token
        const token = jwt.sign({ id: newPatient._id, email: newPatient.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(201).send({ message: "Patient registered successfully", token });

    } catch (err) {
        res.status(500).send("Internal Server Error");
    }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
