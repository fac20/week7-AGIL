# Holiday Destinations API  
<img src="https://user-images.githubusercontent.com/59174800/91482429-f966e100-e89d-11ea-8102-3215563120e3.gif" align="right" />  


Looking to find your next perfect holiday destination? Then this API is for you  


## Table of content :scroll:
- [Installation :electric_plug:](Installation)
- [User Stories :postal_horn::standing_person:](User-Stories)
- [Team :sparkles:](Team)

## Installation

To install and view this app on your local machine follow the below steps:
### Clone
Clone this repo into your desired folder on your local machine using ``` git clone https://github.com/fac20/week7-AGIL.git```
### Set-up
- Connect your local database with init.sql file 
   - run:
    - ``` psql ``` to enter into the postgres terminal
    - ``` CREATE USER myuser SUPERUSER PASSWORD 'mypassword'; ``` to create a dedicated psql local user for the application
   - ``` CREATE DATABASE test_database WITH OWNER myuser; ``` to create a database
    - ``` \connect test_database ``` to connect to the correct db
    - ``` \i db/init.sql ``` to initialise 
    and run the sql file
    - ``` \dt ``` to verify that you have actually initialised and run the db file
    
- Set up environment variables for the json secret key, database_url and test_database_url(which is the local database)
  - Within a .env file create a the followig variables:
    - DATABASE_URL - with the remote heroku database url
    - TEST_DATABASE_URL(connection string) - utl in the format ```postgres://username:password@localhost:5432/database_name```
    - SECRET- a secret key which will be used to create a jwt to be stored in cookies tab
    
- Run:
    - ``` npm install ``` to install all dependencies  
    - ``` npm run dev ``` to start the server using nodemon  
    - ``` npm test ``` to run test locally

  <video controls="true" allowfullscreen="true">
  <iframe src="./installation-guide.mp4" frameborder="0" allowfullscreen="true"> </iframe>
  </video>
  
Please message if you have any questions. 


## User Stories <img src="https://user-images.githubusercontent.com/59174800/91480280-a7708c00-e89a-11ea-988d-38b6af381e63.gif" align="right" />

### Core 
 As a user, I want to: submit information to your site for anyone to see
- [x] As a user, I want to: come back to your site later and see what I posted is still there
- [ ] As a user, I want to: be the only person allowed to delete my stuff
- [x] As A user I want to be able to post something only when I'm logged in
- [x] As a user I wa t to see an error message if I haven't signed up before trying to log in
### Core 
- [x] As an API user, I want to: get a list of all available resources
- [x] As an API user, I want to: get all the information on a specific resource
- [x] As an API user, I want to: create a new resource
- [x] As an API user, I want to: update an existing resource
- [x] As an API user, I want to: delete an existing resource
- [x] As an API user, I want to: only be able to change an existing resource if I am authenticated to do so

### Acceptance Criteria
- [x] An Express server that only returns JSON
- [x] A Postgres database to store the data
- [ ] Endpoints for creating, reading, updating & deleting resources
- [ ] Token-based authentication so only the owner of a resource can change it
- [ ] Correct headers and response metadata
- [ ] Error-handling to make it easy to use the API to build something
- [x] Tests for server routes and database access
- [x] Not process user input as SQL commands
- [x] Hidden environment variables (i.e. not on GitHub)

### Stretch criteria
- [x] GitHub Actions CI setup to run your tests when you push




## Team

- Terry (Deployment)
- Jess (Design)
- Amber (Quality)
- Khadija (Scrum facilitator)  

![Team spirit-pana](https://user-images.githubusercontent.com/59174800/91482007-3f6f7500-e89d-11ea-912a-20d87afc1052.png)
