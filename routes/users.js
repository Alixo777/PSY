const express = require('express');
const {UsersModel, validateUser} = require('../models/usersModel'); 
const router = express.Router();

router.get('/', async (req, res) => {
    let data = await UsersModel.find({});
    res.json(data);
});

router.post('/', async (req, res) => {
    let validateBody = validateUser(req.body)
    if(validateBody.error){
        return res.status(400).json(validateBody.error.details)
    }
    let user = new UsersModel(req.body);
    await user.save();
    res.json(user);
});

router.delete("/:delId", async (req, res) => {
    let newDelId = req.params.delId;
    let data = await UsersModel.deleteOne({ _id: newDelId });
    res.json(data);
});

module.exports = router;
