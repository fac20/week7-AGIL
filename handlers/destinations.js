const model = require("../model/destination");

function getAll(req,res,next) {
    model.getAllDestinations(req,res)
    .then(result => {
        console.log("result", result);
        res.status(200).send(result.rows);
    })
    .catch(error => console.log(error));
}

function newDestination(req, res, next) {
    const user_id = req.user.id;
    const text_content = req.body.text_conten;
    const flight_time = req.body.flight_time;
    const flight_cost = req.body.flight_cost;
    model.newDestination(user_id, text_content, flight_time, flight_cost)
     .then(result => {
        console.log("result", result);
        res.status(200).send(result.rows);
     })
     .catch(error => console.log(error));
}

module.exports = {getAll, newDestination};