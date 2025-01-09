const path = require('path');
const http = require('http');
const express = require('express');
const {routesInit} =  require("./routes/config_routes")
require("./db/mongoConnect")

const app = express();

// midelllwer
// במידה ואתה יכול תפרסר לגייסון
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));

routesInit(app);

const server = http.createServer(app);

const PORT = 3003;
console.log("App is up");

server.listen(PORT);