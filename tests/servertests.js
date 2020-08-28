const test = require("tape");
const router = require("../router")
const supertest = require("supertest");

test("Initialise (check tests are running properly", t => {
    let num = 2;
    t.equal(num, 2, "Should return 2");
    t.end();
  });

test("check status code is 200 and / take you to home page", t => {
    supertest(router)
        .get("/")
        .expect(200)
        .expect("Content-Type", "text/plain")
        .end((err, res) => {
            t.error(err);
            t.equal(res.text.includes('destination'), true);
            t.end();
        });
});


test("check status code is 404", t => {
    supertest(router)
        .get("/nonexistenturl")
        .expect(404)
        .expect("content-type", "text/html")
        .end((err, res) => {
            t.error(err);
            t.equal(res.text, "<h1>Not Found</h1>");
            t.end();
        });
});


test("/login", t => {
    supertest(router)
        .get("/login")
        .expect(200)
        .expect("content-type", "text/html")
        .end((err, res) => {
            t.error(err);
            t.equal(res.body.length, 3);
        });
});
