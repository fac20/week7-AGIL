const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const model = require("../model/users");


dotenv.config();
const SECRET = process.env.JWT_SECRET;
  

function signUp(req, res, next) {
     // save all inputs in variables
    const username = req.body.username;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;
    // check if user has submitted any invalid values
    // if they have return an error
    if (!(username || age || email || password)) {
        const error = new Error("Invalid input");
        error.status = 400;
        console.log("new error thrown");
        next(error);
    };
    // if inputs are correct 
        // hash and salt the password
        bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        // create a user in the db with the hashed pass
        .then(hash => {
            return model
             .createUser({username, age, email, password: hash}) //what if the user already exists --> UNIQUE added in init.sql to avoid this
             .then((user) => {
                const token = jwt.sign({ user: user.id }, SECRET, { expiresIn: "1h" });
                res.status(200).send({ access_token: token });
            })
            .catch(err => {
                console.log(err);
            });
        })
        .catch((err) => {
            console.log(err);
        });
}


function logIn(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    let user = '';
    model
        .getUser(email)      
        .then(dbUser => {
            console.log("line 56", dbUser);
            user = dbUser;
            return bcrypt.compare(password, dbUser.password);
        })
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
