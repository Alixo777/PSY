const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const PatientModel = require("../models/PatientModel");
const { validatePatient } = require("../validators/patientValidator");

dotenv.config();
const router = express.Router();

// Register Patient
router.post("/register", async (req, res) => {
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

module.exports = router;
