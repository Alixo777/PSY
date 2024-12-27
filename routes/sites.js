const express = require('express');
const {SitesModel, validateSite} = require('../models/sitesModel'); 
const router = express.Router();

router.get('/', async (req, res) => {
    let data = await SitesModel.find({});
    res.json(data);
});

router.post('/', async (req, res) => {
    let validateBody = validateSite(req.body)
    if(validateBody.error){
        return res.status(400).json(validateBody.error.details)
    }
    let site = new SitesModel(req.body);
    await site.save();
    res.json(site);
});

router.delete("/:delId", async (req, res) => {
    let newDelId = req.params.delId;
    let data = await SitesModel.deleteOne({ _id: newDelId });
    res.json(data);
});

router.put("/:id", async (req, res) => {
    let siteId = req.params.id;
    
    // Validate the request body first
    let validateBody = validateSite(req.body);
    if (validateBody.error) {
        return res.status(400).json(validateBody.error.details);
    }

    try {
        // Find the site by their ID and update their data
        let updatedSite = await SitesModel.findByIdAndUpdate(
            siteId,
            req.body,
            { new: true } // this option ensures the updated site is returned
        );

        // If no site is found, return a 404 error
        if (!updatedSite) {
            return res.status(404).json({ message: "site not found" });
        }

        // Return the updated site data
        res.json(updatedSite);
    } catch (error) {
        res.status(500).json({ message: "Error updating site data", error: error.message });
    }
});

module.exports = router;
