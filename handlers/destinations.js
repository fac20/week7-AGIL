// display all ds
// update/edit resource
// delete resource
//  get specific resources's info
// create a new resource

const model = require("../model/destination");

function displayDestinations(req,res,next) {
    model
    .allDestinations() //get the right function name  // maybe use innerjoin to also display username (in model)
    .then(result => res.send(result))
    .catch(next);
}

function showDestination(req, res, next) {
    const id= req.params.id;
    model.
}

function updateDestination(req, res, next){
    const id= req.params.id;
    const newDestination = req.body.destination;
    model
        .updateDestination(id, newDestination)
        .catch(next);
}


