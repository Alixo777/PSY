const indexR = require('./index');
const usersR = require('./users');
const patientsR = require('./patients');
const sitesR = require('./sites');



exports.routesInit = (app) => {
    app.use("/" , indexR)
    app.use("/users" , usersR)
    app.use("/patients" , patientsR)
    app.use("/sites" , sitesR)


}
