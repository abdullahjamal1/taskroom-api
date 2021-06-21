trade off between query performance vs consistency

// using references ( normalization ) -> consistency
let author ={
    name: 'mosh'
}
let course = {
    author: 'id'
}

// using embedded documents (denormalization) -> performance
let course = {
    author:{
        name: 'Mosh hamedani'
    }
}

// hybrid approach
let author = {
    name: 'Mosh'
    // 50 other properties
}

let course = {
    author: {
        id: 'ref',
        name: 'Mosh'
    }
}

////////////////////////////////////////////////

npm i fawn 

fawn library to simulate transactions( uses mongodb 2 phase commit under the hoods)

////////////////////////////////

object _id: is made of 24 characters

// 12 bytes
    // first 4 bytes: timestamp when object was created
    // next 3 bytes: machine identifier
    // next 2 bytes: process identifier
    // next 3 bytes: counter

// 16 million docs

// Driver -> MongoDB 
// mongodb id is generaated by mongodb driver

//////////////////////////////////////////

npm i joi-objectid

// package to add objectid validaton in joi 

// trade of between query performance vs consistency

// using references (normalization) --> consistency
let author = {
    name: 'Mosh
}
let course = {
    author: 'id'
}

// using embedded documents (denormalization) --> performance
let course = {
    author: {
        name: 'Mosh'
    }
}

// hybrid
let author = {
    name: 'Mosh'
    // 50 other properties
}

let course = {
    author: {
        id: 'ref',
        name: 'Mosh'
    }
}

///////////////////////////////////////

// Author: {
//     name,
//     bio, 
//     website
// }
// Course: {
//     name,
//     author : {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Author'
//      }
// }

///////////////////////////////////////////

// Register: POST /api/users
// Login: POST /api/logins

email: {
    type: String,
    unique: true
}

/////////////////////////////////////////////

// lodash

////////////////////////////////////////////

_.pick(user, ['name', 'email']);

///////////////////////////////////

joi-password-complexity
to check for password complexity like number of lower-case/upper-case

/////////////////////////////////

npm i bcrypt

/////////////////////////

json web token - 3 parts

Header: {
    "alg" :"HS256",
    "typ" :"JWT"
}
PAYLOAD: {
    "sub": "213435",
    "name": "abdullah",
    "admin": true
}
verify signature: {

}

/////////////////////////////

npm i jsonwebtoken

//////////////////////////

npm i config

////////////////////////

identify if user is admin from json web token only there is no
need to query dataBase

////////////////////////

400 : bad request
403 : forbidden (eg: not admin)
404 : not found
401 : unauthorized (no authenticated)

/////////////////////

handling errors

1. send a friendly error
2. log the exception

////////////////////////////////

// adds automatic error handling to application
npm i express-async-errors

////////////////////////////////////

// for logging to mongodb
npm i winston-mongodb

///////////////////////////////////////

TDD (test driven development)

with automated testing our source code consists of: -
1. production code
2. test code

////////////////////////////

We have 3 types of tests :-

1. unit tests   
    tests a unit application without its external dependencies

2. integration tests
    tests the application with its external dependencies.

3. end-to-end tests ( UI tests )
    drives an application through its UI.

// selenium is used for (end to end or UI) test

//////////////////////////////////////////

jest :- testing framework

npm i jest --save-dev

// --save-dev tells that it is a development dependency it is not 
// part of production environment

//////////////////////////////////////////

number of unit tests should be greater than the execution paths

///////////////////////

to run application in test mode
NODE_ENV=test node index.js

////////////////////////////////

npm i supertest --save-dev

to send requests to application endpoints for testing purposes

///////////////////////////////////////

test-driven development

1. write a failing test
2. write the simplest code to make the test pass
3. refactor if necessary.

//////////////////////////////////////////////

npm i helmet

// it is a middleware package to prevent from well known 
// web vulnerabilities

////////////////////////////////////////////////

npm i compression

// to compress the http response we send to the client
