const express = require("express");
// const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
// const templates = require("./templates");
const server = express();
const userHandlers = require("./handlers/users");
const destinationHandlers = require("./handlers/destinations");

// server.use(cookieParser());
server.use(express.json());

server.listen(3000, () => 
    console.log("Server listening on http:localhost:3000")
);

server.get("/", (req, res, next) => { //displays all json data
    destinationHandlers.displayDestinations(req, res, next)
})

server.post("/signup",  (req, res, next) => { //call the handler which creates a new user and password
    userHandlers.signUp(req, res, next)
})

server.post("/login", (req, res, next) => { //checks the user exists and logs them in 
    userHandlers.logIn(req, res, next);
})

server.post("/destination",  (req, res, next) => {//adds destination to our database
    destinationHandlers.showDestination(req, res, next)
})

server.post("/delete",  (req,res) => {//check logged in and delete destination 
    
})

server.put("/destination/:id",  (req, res, next) => {
    destinationHandlers.updateDestination(req,res, next);
})

// server.use(handleError);
