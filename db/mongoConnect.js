const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

    await mongoose.connect('mongodb://host.docker.internal:27017/users');
    console.log("mongo connect started");
}