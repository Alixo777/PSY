const indexR = require('./index');
const patientsR = require('./patients');
const diagnosesR = require('./diagnoses');
const examsR = require('./exams');
const meetsR = require('./meets');
const therapistsR = require('./therapists');
const eachExamsR= require('./eachExams');
const express = require('express');
const routers = express.Router();





routers.use("/" , indexR)
routers.use("/patients" , patientsR)
routers.use("/diagnoses" , diagnosesR)
routers.use("/exams" , examsR)
routers.use("/meets" , meetsR)
routers.use("/therapists" , therapistsR)
routers.use("/eachExams" , eachExamsR)




module.exports = routers