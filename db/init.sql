BEGIN;

DROP TABLE IF EXISTS users, destinations, must_see CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    age INTEGER NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE destinations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    text_content TEXT,
    --Time 0 is from tutorial >>>> https://www.sqlservertutorial.net/sql-server-basics/sql-server-time/
    -- I removed the time 0 because it was causing issues, thought we could just put integer and have time in hours - amber
    flight_time INTEGER NOT NULL,
    flight_cost TEXT
);

CREATE TABLE must_see (
    id SERIAL PRIMARY KEY,
    destinations_id INTEGER REFERENCES destinations(id),
    user_id INTEGER REFERENCES users(id), 
    text_content TEXT
); 

INSERT INTO users (username, age, email, password) VALUES
    ('JessIsCooool', 23, 'Jsic@test.com', '' ),
    ('ElTel', 99, 'eltl@gmail.com', '');

INSERT INTO destinations (user_id, text_content, flight_time, flight_cost) VALUES
    (1, 'Spain', '3', '£100'),
    (2, 'The Moon', '72', '£1,000,000');
    
INSERT INTO must_see (destinations_id, user_id, text_content) VALUES
    (1, 1, 'Magaluf'),
    (2, 2, 'Dark side');

COMMIT;

