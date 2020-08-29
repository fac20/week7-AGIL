const model = require("../model/destination");

function getAll(req,res,next) {
    model.getAllDestinations(req,res)
    .then(result => {
        res.status(200).send(result.rows);
    })
    .catch(error => console.log(error));
}

function newDestination(req, res, next) {
    const user_id = req.user.id;
    const text_content = req.body.text_content;
    const flight_time = req.body.flight_time;
    const flight_cost = req.body.flight_cost;
    model.createDestination(user_id, text_content, flight_time, flight_cost)
     .then(result => {
        res.status(200).send(result.rows);
     })
     .catch(error => console.log(error));
}

function getDestinationById(req, res, next) {
    const id = req.params.id;
    model.getDestination(id)
     .then(result => {
         res.status(200).send(result);
     })
     .catch(error => console.log(error));
}

function deleteDestination(req, res, next) {
    const id = req.params.id;
    model.deleteDestination(id)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(error => console.log(error));
}

module.exports = {getAll, newDestination, getDestinationById, deleteDestination};