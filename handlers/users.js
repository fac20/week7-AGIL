<<<<<<< HEAD
=======
const bcrypt = require("bcryptjs")
>>>>>>> master
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const model = require("../model/users");

<<<<<<< HEAD
dotenv.config();
const SECRET = process.env.JWT_SECRET;

function post(req, res, next) {
    const userData = req.body;
    model
        .createUser(userData)
        .then((user) => {
            const token = jwt.sign({ user: user.id }, SECRET, { expiresIn: "1h" });
            const response = {
                id: user.id,
                name: user.name,
                email: user.email,
                access_token: token,
            };
            res.status(201).send(response);
        })
        .catch(next);
}

function signUp(req, res, next){
    
}

function login(req, res, next) {
=======

dotenv.config();
const SECRET = process.env.JWT_SECRET;
  

function signUp(req, res, next){
     // save all inputs in variables
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // check if user has submitted any invalid values
    // if they have return an error
    if (!(username || email || password)) {
        const error = new Error("Invalid input");
        error.status = 400;
        next(error);
    };
    // if inputs are correct 
        // hash and salt the password
        bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        // create a user in the db with the hashed pass
        .then(hash =>
             model
             .createUser({username, email, password: hash}) //what if the user already exists --> UNIQUE added in init.sql to avoid this
            .then((user) => {
                const token = jwt.sign({ user: user.id }, SECRET, { expiresIn: "1h" });
                res.status(200).send({ access_token: token });
            })
            .catch(next)
             )
        .catch(next);
}


function logIn(req, res, next) {
>>>>>>> master
    const email = req.body.email;
    const password = req.body.password;
    
    model
<<<<<<< HEAD
        .getUser(email)
        .then              .then(dbUser => bcrypt.compare(password, dbUser.password))
        .then(dbUser => bcrypt.compare(password, dbUser.password))
v        .then(dbUser => bcrypt.compare(password, dbUser.password))
ygicvj hbkausN(dbUser => bcrypt.compare(password, dbUser.password))

        .then((user) => {
            if (password !== user.password) {
                const error = new Error("Unauthorized");
                error.status = 401;
                next(error);
            } else {
                const token = jwt.sign({ user: user.id }, SECRET, { expiresIn: "1h" });
                res.status(200).send({ access_token: token });
                
            }
        })
        .catch(next);
}

module.exports = { post, login };
=======
        .getUser(email)      
        .then(dbUser => bcrypt.compare(password, dbUser.password))
        .then(match => {
            // if pass dont match throw error
            if (!match) throw new Error("Take a hike! Password mismatch!!");

            // if match - create jwt
            const token = jwt.sign({ user: user.id }, SECRET, { expiresIn: "1h" });
            res.status(200).send({ access_token: token });
          })

        .catch(next);
}



module.exports = { signUp, logIn };
>>>>>>> master
