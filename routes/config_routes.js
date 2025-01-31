const indexR = require('./index');
const patientsR = require('./patients');
const diagnosesR = require('./diagnoses');
const examsR = require('./exams');
const meetsR = require('./meets');
const therapistsR = require('./therapists');
const patientRoutes = require("./routes/patientRegistration");





exports.routesInit = (app) => {
    app.use("/" , indexR)
    app.use("/patients" , patientsR)
    app.use("/diagnoses" , diagnosesR)
    app.use("/exams" , examsR)
    app.use("/meets" , meetsR)
    app.use("/therapists" , therapistsR)
    app.use("/patientRegistration", patientRegistrationR)





}
