const express = require('express');
const {PatientsModel, validatePatient} = require('../models/patientsModel'); // Or whatever the correct name is
const router = express.Router();

router.get('/', async (req, res) => {
    let data = await PatientsModel.find({});
    res.json(data);
});

router.post('/', async (req, res) => {
    let validateBody = validatePatient(req.body)
    if(validateBody.error){
        return res.status(400).json(validateBody.error.details)
    }    
    let patient = new PatientsModel(req.body);
    await patient.save();
    res.json(patient);
});

router.delete("/:delId", async (req, res) => {
    let newDelId = req.params.delId;
    let data = await PatientsModel.deleteOne({ _id: newDelId });
    res.json(data);
});

router.put("/:id", async (req, res) => {
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

        // If no patient is found, return a 404 error
        if (!updatedPatient) {
            return res.status(404).json({ message: "Patient not found" });
        }

        // Return the updated patient data
        res.json(updatedPatient);
    } catch (error) {
        res.status(500).json({ message: "Error updating patient data", error: error.message });
    }
});

module.exports = router;