const pg = require("pg");
const env = require("dotenv").config();

// const options = {
    connectionString = process.env.DATABASE_URL
//     // ssl : {rejectUnauthorized : false}
// }

// if we are testing (node env is test env - look at package.json's test script (see line 12)  - then use test database)
if (process.env.NODE_ENV === "test") {
    connectionString = process.env.TEST_DATABASE_URL;
}

const db = new pg.Pool(options)

module.exports = db;
