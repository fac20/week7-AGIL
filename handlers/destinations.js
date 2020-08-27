// display all ds
// update/edit resource
// delete resource
//  get specific resources's info
// create a new resource

const model = require("../model/destination");

function displayDestinations(req,res,next) {
    model
    .getAllDestinations()  // maybe use innerjoin to also display username (in model)
    .then(result =>
        {
            console.log(result)
            res.status(200).send(result)
        })
    .catch(next);
}

function showDestination(req, res, next) {
    const id= req.params.id;
    model.getDestination(id)
        .then(result => res.status(200).send(result))
        .catch(next);
}

function updateDestination(req, res, next){
    const id= req.params.id;
    const newDestination = req.body.destination;
    model
        .updateDestination(id, newDestination)
        .then(res.status(200))
        .catch(next);
}

function deleteDestination(req, res, next) {
    model.
        deleteDestination(id)
        .then(res.status(200))
        .catch(next);
}

module.exports = {displayDestinations, showDestination, updateDestination, deleteDestination};

