const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

    await mongoose.connect(process.env.MONGO_URL);
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
 
 