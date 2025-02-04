const express = require('express');
const bcrypt = require('bcrypt');
const { auth } = require('../middlewares/auth');
const { PatientsModel, validatePatient, validLogin, createToken } = require('../models/patientsModel');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Route to get all patients (admin only, perhaps)
router.get('/', async (req, res) => {
    try {
        let data = await PatientsModel.find({});
        res.json(data);
    } catch (err) {
        res.status(500).json({ msg: "Error fetching patients", error: err.message });
    }
});

// Register Route with bcrypt password hashing and email uniqueness check
router.post('/register', async (req, res) => {
    const { email, password, fullName } = req.body;

    // Step 1: Basic validation using the existing validatePatient function
    let validateBody = validatePatient(req.body);
    if (validateBody.error) {
        return res.status(400).json(validateBody.error.details);
    }

    try {
        // Step 2: Check if the patient already exists by email
        const existingPatient = await PatientsModel.findOne({ email });
        if (existingPatient) {
            return res.status(400).json({ msg: 'Email already registered' });
        }

        // Hash the password before saving the patient
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new patient with the hashed password
        const newPatient = new PatientsModel({
            email,
            password: hashedPassword,
            fullName,
        });

        // Save the new patient to the database
        await newPatient.save();

        // Generate a JWT token for the newly registered patient
        const token = createToken(newPatient);

        // Send back success response with the token
        res.json({ message: 'Registration successful', token });

    } catch (err) {
        res.status(500).json({ msg: 'Error during registration', error: err.message });
    }
});

// Login Route - Validates the email and password, returns JWT token
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate login credentials using existing function
        const patient = await validLogin(email, password);

        // Generate a JWT token for the patient
        const token = createToken(patient);

        // Send the token as a response
        res.json({ message: 'Login successful', token });
    } catch (err) {
        res.status(401).json({ msg: 'Invalid email or password', error: err.message });
    }
});

// Route to get email of the current patient (uses auth middleware to get patient ID from token)
router.get('/myEmail', auth, async (req, res) => {
    try {
        let patient = await PatientsModel.findOne({ _id: req.tokenData._id }, { email: 1 });
        res.json(patient);
    } catch (err) {
        res.status(500).json({ msg: 'Error fetching email', error: err.message });
    }
});

// Route to get full patient info using JWT token
router.get('/myInfo', async (req, res) => {
    let token = req.header('x-api-key');

    if (!token) {
        return res.status(401).json({ msg: 'You need to send token to this endpoint URL' });
    }

    try {
        // Verify the token and extract the token data
        let tokenData = jwt.verify(token, 'PsySecret');

        // Fetch patient data based on token ID
        let patient = await PatientsModel.findOne({ _id: tokenData._id }, { password: 0 }); // Don't return password
        res.json(patient);
    } catch (err) {
        return res.status(401).json({ msg: 'Token not valid or expired', error: err.message });
    }
});

// Delete patient by ID
router.delete('/:delId', async (req, res) => {
    let newDelId = req.params.delId;
    try {
        let data = await PatientsModel.deleteOne({ _id: newDelId });
        res.json(data);
    } catch (err) {
        res.status(500).json({ msg: 'Error deleting patient', error: err.message });
    }
});

// Update patient info by ID
router.put('/:id', async (req, res) => {
    let patientId = req.params.id;

    // Validate the request body first
    let validateBody = validatePatient(req.body);
    if (validateBody.error) {
        return res.status(400).json(validateBody.error.details);
    }

    try {
        // Find the patient by their ID and update their data
        let updatedPatient = await PatientsModel.findByIdAndUpdate(
            patientId,
            req.body,
            { new: true } // this option ensures the updated patient is returned
        );

        if (!updatedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json(updatedPatient);
    } catch (error) {
        res.status(500).json({ message: 'Error updating patient data', error: error.message });
    }
});

module.exports = router;
