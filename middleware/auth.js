const jwt = require("jsonwebtoken");
const model = require("../model/users");
require("dotenv").config;

const SECRET = process.env.JWT_SECRET;


function checkAuth(req, res, next) {
    const userAuth = req.headers.authorization; 
    if (!userAuth) {  // if user doesn't exist in database, throw error and ask user to log in
        const error = new Error("Authorization header required")
        error.status = 400;
        next(error);
    } else {
    const token = userAuth.replace("Bearer ", "");
    try {
        const tokenData = jwt.verify(token, SECRET); // We need to add SECRET to .env
        console.log("tokenData", tokenData);
        model
        .getUser(tokenData.user)
        .then((user) => {
            console.log("user.js line 21", user);
            // attach the authenticated user to the request object
         req.user = user;
        next()
        })
        .catch(next);
    } catch(_) {
         // we don't use the caught error, since we know it came from jwt.verify
        const error = new Error("Unauthorized");
        error.status = 401;
        next(error);
    }
}
};

module.exports = checkAuth ;