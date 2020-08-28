
// users - id, username, age, pass
// destinations - id, user_id, text_content
// must_see - Id, destinations_id, text_content
 
const test = require("tape");
const build = require("./build.js"); 


test("Can create a new user in usernames table", (t) => {
    build().then(() => {
      db.query("INSERT INTO users (username) VALUES ('Simba') ")
      db.query("SELECT username FROM users")
        .then((result => result.rows))
        .then((usernames) => {
          const latestUser = usernames[usernames.length - 1];
          t.equal(latestUser.username, 'Simba');
          t.end();
        })
        .catch((error) => {
          t.error(error);
          t.end();
        });
    });
  });