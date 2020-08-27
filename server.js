const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3000;
const templates = require("./templates");
const server = express();

server.use(cookieParser());
server.use(express.urlencoded());

server.listen(3000, () => 
    console.log("Server listening on http:localhost:3000")
);

server.get("/", (req, res) => { //displays all json data
})

server.post("/signup", (req, res) => { //call the handler which creates a new user and password

})

server.post("/login", (req, res) => { //checks the user exists and logs them in 

})

server.post("/logout", (req, res) => { //delete cookie and redirect to home page 

})

server.post("/destination", (req, res) => {//adds destination to our database

})

server.post("/delete", (req,res) => {//check logged in and delete destination 
    
})

server.put("/destination/:id", (req, res) => {
    
})