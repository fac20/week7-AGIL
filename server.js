const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000 || 0.0.0.0;
const server = express();
const userHandlers = require("./handlers/users");
const destinationHandlers = require("./handlers/destinations");
const verifyUser = require("./middleware/auth");

server.use(cookieParser());
server.use(express.json()); //we need this to be able to get req.body
server.use(express.urlencoded({ extended: true }));

server.listen(3000, () => 
    console.log(`Server listening on http://localhost:${PORT}`)
);

server.get("/", (req, res) => { //displays all json data
    destinationHandlers.getAll(req, res);
})

server.post("/signup", (req, res) => { //call the handler which creates a new user and password
    userHandlers.signUp(req, res);
})

server.post("/login", (req, res) => { //checks the user exists and logs them in 
    userHandlers.logIn(req, res)
})

server.post("/newdestination", verifyUser, (req, res) => {//adds destination to our database
    destinationHandlers.newDestination(req, res);
})

server.get("/destination/:id", (req, res) => {
    destinationHandlers.getDestinationById(req, res);
})

server.delete("/destination/:id", (req, res) => {
    destinationHandlers.deleteDestination(req, res);
})
 

function handleErrors(error, req, res, next) {
    console.error(error);
    const status = error.status || 500;
    res.status(status).send(`<h1>Something went wrong</h1>`);
  }

server.use(handleErrors);