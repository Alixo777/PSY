const indexR = require('./index');
const usersR = require('./users');
const patientsR = require('./patients');
const diagnosesR = require('./diagnoses');
const examsR = require('./exams');
const meetsR = require('./meets');
const therapistsR = require('./therapists');




exports.routesInit = (app) => {
    app.use("/" , indexR)
    app.use("/users" , usersR)
    app.use("/patients" , patientsR)
    app.use("/diagnoses" , diagnosesR)
    app.use("/exams" , examsR)
    app.use("/meets" , meetsR)
    app.use("/therapists" , therapistsR)





}
