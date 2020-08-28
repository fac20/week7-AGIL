const db = require("../db/connection");

// create user - (To then be used as input for a database)
function createUser(user){
    console.log("caling createuser", user);
    // Inserts data into database tables 
    return db
        .query('INSERT INTO users(username, age, email, password) VALUES ($1, $2, $3, $4)', [
                    user.username,
                    user.age,
                    user.email,
                    user.password,  
        ])
        // Then retuns the information to be used wherever we like 
        .then(result => result.rows)
        .catch(error => error) //necessary?
}

//Get user
function getUser(email){
    return db
        .query('SELECT * FROM users WHERE email=($1)', [email])
        .then((result) => {
            return result.rows[0];
        })
        .catch(error => error)
};

// ----> We do not want the user to edit their username??
// //  edit user - username
// function editUser(user){
//     // Inserts data into database tables 

//     return db
//         .query('')
//         // Then retuns the information to be used wherever we like 
//         .then(result => result.rows)
//         .catch(error => error) //necessary?
// }


// delete user
//  user is going to be json with all user details
function deleteUser(user){
  const id = user.id;
    return db
        .query(`DELETE FROM users WHERE id =($1)`, [id])
        // Then retuns the information to be used wherever we like 
        .catch(error => error);
};



module.exports = {createUser, getUser, deleteUser};


