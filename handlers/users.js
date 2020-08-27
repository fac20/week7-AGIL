const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const model = require("../model/users");

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


function login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    
    model
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

module.exports = { post, login };