const model = require("../model/destination");

function getAll(req,res,next) {
    model.getAllDestinations(req,res)
    .then(result => {
        console.log("result", result);
        res.status(200).send(result.rows);
    })
    .catch(error => console.log(error));
}

module.exports = {getAll};