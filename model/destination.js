const db = require("../db/connection");

function getAllDestinations() {
    return db
        .query('SELECT * FROM destinations')
        // .catch(err => next(err));
}

function getDestination(id) {
    return db
        .query("SELECT * FROM destinations WHERE id=($1)", [id])
        .then(result => {
            return result.rows[0];
        })
        // .catch(err => next(err));
}

function createDestination(user_id, text_content, flight_time, flight_cost) {
    return db
        .query("INSERT INTO destinations(user_id, text_content, flight_time, flight_cost) VALUES ($1, $2, $3, $4) RETURNING *", [user_id, text_content, flight_time, flight_cost])
        // .catch(err => next(err)); - we need to handle errors in the handlers, 
        // if we remove this line then the error will be caught by the handler and shown on our terminal 
};

function updateDestination(id, newDestination) {
    return db
        .query('UPDATE text_content IN destinations WHERE id=($1)', [id])
        // .catch(err => next(err));
}

function deleteDestination() {
    return db
        .query('')
}

module.exports = { 
    getAllDestinations,
    getDestination,
    createDestination,
    updateDestination,
    deleteDestination
};