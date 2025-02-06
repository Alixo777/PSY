const express = require('express');
const router = express.Router();

// Import models for each exam
const { DiagnosesExam } = require('../models/diagnosesModel');
const { PanicExam, validatePanicExam } = require('../models/panicExamModel');
const { SelfConfidenceExam, validateSelfConfidenceExam } = require('../models/selfConfidenceExamModel');
const { SocialPanicExam, validateSocialPanicExam } = require('../models/socialPanicExamModel');
const { StressExam, validateStressExam } = require('../models/stressExamModel');

// 1. Diagnoses Exam Routes
// Get all Diagnoses exams
router.get('/diagnoses', async (req, res) => {
    try {
        let data = await DiagnosesExam.find({});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving diagnoses data", error: error.message });
    }
});

// Create a new Diagnoses exam
router.post('/diagnoses', async (req, res) => {
    const { error } = validatePanicExam(req.body);
    if (error) {
        return res.status(400).json(error.details);
    }

    const exam = new DiagnosesExam(req.body);
    try {
        await exam.save();
        res.json(exam);
    } catch (error) {
        res.status(500).json({ message: "Error saving diagnoses exam", error: error.message });
    }
});

// 2. Panic Exam Routes
// Get all Panic exams
router.get('/panic', async (req, res) => {
    try {
        let data = await PanicExam.find({});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving panic exam data", error: error.message });
    }
});

// Create a new Panic exam
router.post('/panic', async (req, res) => {
    const { error } = validatePanicExam(req.body);
    if (error) {
        return res.status(400).json(error.details);
    }

    const exam = new PanicExam(req.body);
    try {
        await exam.save();
        res.json(exam);
    } catch (error) {
        res.status(500).json({ message: "Error saving panic exam", error: error.message });
    }
});

// 3. Self Confidence Exam Routes
// Get all Self Confidence exams
router.get('/self-confidence', async (req, res) => {
    try {
        let data = await SelfConfidenceExam.find({});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving self-confidence exam data", error: error.message });
    }
});

// Create a new Self Confidence exam
router.post('/self-confidence', async (req, res) => {
    const { error } = validateSelfConfidenceExam(req.body);
    if (error) {
        return res.status(400).json(error.details);
    }

    const exam = new SelfConfidenceExam(req.body);
    try {
        await exam.save();
        res.json(exam);
    } catch (error) {
        res.status(500).json({ message: "Error saving self-confidence exam", error: error.message });
    }
});

// 4. Social Panic Exam Routes
// Get all Social Panic exams
router.get('/social-panic', async (req, res) => {
    try {
        let data = await SocialPanicExam.find({});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving social panic exam data", error: error.message });
    }
});

// Create a new Social Panic exam
router.post('/social-panic', async (req, res) => {
    const { error } = validateSocialPanicExam(req.body);
    if (error) {
        return res.status(400).json(error.details);
    }

    const exam = new SocialPanicExam(req.body);
    try {
        await exam.save();
        res.json(exam);
    } catch (error) {
        res.status(500).json({ message: "Error saving social panic exam", error: error.message });
    }
});

// 5. Stress Exam Routes
// Get all Stress exams
router.get('/stress', async (req, res) => {
    try {
        let data = await StressExam.find({});
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving stress exam data", error: error.message });
    }
});

// Create a new Stress exam
router.post('/stress', async (req, res) => {
    const { error } = validateStressExam(req.body);
    if (error) {
        return res.status(400).json(error.details);
    }

    const exam = new StressExam(req.body);
    try {
        await exam.save();
        res.json(exam);
    } catch (error) {
        res.status(500).json({ message: "Error saving stress exam", error: error.message });
    }
});

module.exports = router;
