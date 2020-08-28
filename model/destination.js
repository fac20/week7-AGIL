const db = require("../db/connection");

function getAllDestinations() {
    return db
        .query('SELECT * FROM destinations')
        .catch(err => err);
}

function getDestination(id) {
    return db
        .query("SELECT * FROM destinations WHERE id=($1)", [id])
        .catch(err => err);
}

function createDestination(destination) {
    return db
        .query("INSERT INTO destinations VALUES ($1)", [destination])
        .catch(err => err)
};

function updateDestination(id, newDestination) {
    return db
        .query('UPDATE text_content IN destinations WHERE id=($1)', [id])
        .catch(err => err);
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