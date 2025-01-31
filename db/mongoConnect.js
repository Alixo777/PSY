const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

    await mongoose.connect('mongodb://admin:admin@mongo:27017/projects');
    console.log("mongo connect started");
}
// mongosh -u admin //pass: admin

//use patient // name of db
// db.createUser(
//     {
//       user: "admin",
//       pwd: "admin",  // Or  "<cleartext password>"
//       roles: [ "readWrite", "dbAdmin" ]
//     }
//  )
 
 