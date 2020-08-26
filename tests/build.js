const fs = require("fs");
const path = require("path");
const db = require("../db/connection");


const initPath = path.join(__dirname, "test.sql");
const testSQL = fs.readFileSync(initPath, "utf-8");


function build() {
	return db.query(testSQL);
}

if (require.main === module) {
	build().then(() => db.end());
}

module.exports = build;