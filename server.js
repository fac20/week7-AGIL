const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
// const templates = require("./templates");
const server = express();
const userHandlers = require("./handlers/users");
const destinationHandlers = require("./handlers/destinations");

server.use(cookieParser());
server.use(express.urlencoded({ extended: true }));

server.listen(3000, () => 
    console.log(`Server listening on http://localhost:${PORT}`)
);

server.get("/signup", (req, res) => { //displays all json data
    console.log("signup");
})

server.post("/signup", (req, res) => { //call the handler which creates a new user and password
    console.log("signup handler called");
    userHandlers.signUp(req, res);
})

server.post("/login", (req, res) => { //checks the user exists and logs them in 
    userHandlers.logIn(req, res)
})

server.post("/logout", (req, res) => { //delete cookie and redirect to home page 
    
})

server.post("/destination", (req, res) => {//adds destination to our database

})

server.post("/delete", (req,res) => {//check logged in and delete destination 
    
})

server.put("/destination/:id", (req, res) => {
    
})
 

function handleErrors(error, req, res, next) {
    console.error(error);
    const status = error.status || 500;
    res.status(status).send(`<h1>Something went wrong</h1>`);
  }

server.use(handleErrors);