const express = require('express');
const { therapistsSchema, validateUser } = require('../models/therapistsModel'); // Import the Therapists model and validation function
const router = express.Router();

// Get all therapists
router.get('/', async (req, res) => {
    try {
        let data = await therapistsSchema.find({});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving therapists data", error: error.message });
    }
});

// Create a new therapist
router.post('/', async (req, res) => {
    let validateBody = validateUser(req.body);
    if (validateBody.error) {
        return res.status(400).json(validateBody.error.details);
    }

    let therapist = new therapistsSchema(req.body);
    try {
        await therapist.save();
        res.json(therapist);
    } catch (error) {
        res.status(500).json({ message: "Error saving therapist", error: error.message });
    }
});

// Delete a therapist by ID
router.delete("/:delId", async (req, res) => {
    let newDelId = req.params.delId;
    try {
        let data = await therapistsSchema.deleteOne({ _id: newDelId });
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error deleting therapist", error: error.message });
    }
});

// Update a therapist by ID
router.put("/:id", async (req, res) => {
    let therapistId = req.params.id;

    let validateBody = validateUser(req.body);
    if (validateBody.error) {
        return res.status(400).json(validateBody.error.details);
    }

    try {
        let updatedTherapist = await therapistsSchema.findByIdAndUpdate(
            therapistId,
            req.body,
            { new: true } // Return the updated document
        );

        if (!updatedTherapist) {
            return res.status(404).json({ message: "Therapist not found" });
        }

        res.json(updatedTherapist);
    } catch (error) {
        res.status(500).json({ message: "Error updating therapist data", error: error.message });
    }
});

module.exports = router;
