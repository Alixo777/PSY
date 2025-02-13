const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

    await mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.ls0l2.mongodb.net/`);
    console.log("mongo connect started");
}
// mongosh -u admin //pass: admin

//use projects // name of db
// db.createUser(
//     {
//       user: "admin",
//       pwd: "admin",  // Or  "<cleartext password>"
//       roles: [ "readWrite", "dbAdmin" ]
//     }
//  )
 
 