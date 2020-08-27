const model = require("../model/destination");

function getAll(req,res,next) {
    model.getAllDestinations(req,res)
    .then(result => {
        console.log("result", result); //the error we're getting is a result of the db query
        res.status(200).send(result);
    })
    .catch(error => console.log(error));
}

module.exports = {getAll};