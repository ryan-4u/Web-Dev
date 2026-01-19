const { faker } = require('@faker-js/faker');
const mysql = require('mysql2') ; // getting mysql package
const express = require( "express" ) ;
const app = express() ;
const path = require("path") ;
const methodOverride = require("method-override") ;

app.use(methodOverride("_method")) ;
app.use(express.urlencoded( {extended:true} )) ;
app.set("view engine", "ejs") ;
app.set("views", path.join(__dirname,"/views")) ;

// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'demo',
  password : 'Aaryan@4u'
});

// create fake user of fake data with faker package
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
}
// DATA IS ADDED ALREADY - SO NO NEED TO KEEP IT AROUND ACTUALLY
// let query = "INSERT INTO user (id ,username,email,password) VALUES ?;" ;
// let data = [] ;
// for(let i=0 ; i<43 ;i++){
//   data.push( getRandomUser() ) ;
// }

//home route
app.get("/", (req,res) => {
  q = "SELECT count(*) FROM user" ;
  try {
    connection.query( q , (err,result) => {
      if (err) throw err ;
      let count = result[0]["count(*)"] ;
      res.render("home.ejs" , {count}) ;
    }) ;
  } catch(err){
    console.log(err) ;
    res.send("ERROR in DataBase")
  }
  
});

//show route
app.get("/user", (req,res) => {
  q = "SELECT * FROM user" ;
  try {
    connection.query( q , (err,users) => {
      if (err) throw err ;
      let i = 0
      res.render("show.ejs", {users,i}) ;
    }) ;
  } catch(err){
    console.log(err) ;
    res.send("ERROR in DataBase")
  }
}) ;

//edit route
app.get("/user/:id/edit", (req,res) => {
  let {id} = req.params ;
  let q = `SELECT * FROM user WHERE id='${id}'` ;
  try {
    connection.query( q , (err,result) => {
      if (err) throw err ;
      let user = result[0] ;
      console.log(user) ;
      res.render("edit.ejs",{user}) ;
    }) ;
  } catch(err){
    console.log(err) ;
    res.send("ERROR in DataBase")
  }
});

//update route
app.patch("/user/:id" , (req,res) => {
  let {id} = req.params ;
  let{password: formPass ,username : newName} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'` ;
  try {
    connection.query( q , (err,result) => {
      if (err) throw err ;
      let user = result[0] ;
      if( formPass != user.password){
        res.send("WRONG Password") ;
      } else {
        let q2 = `UPDATE user SET username="${newName}" WHERE id = "${id}"` ;
        connection.query(q2, (err,result) => {
          if(err) throw err ;
          res.redirect("/user") ;
        });
      }
      // console.log(user) ;
      // res.render("edit.ejs",{user}) ;
    }) ;
  } catch(err){
    console.log(err) ;
    res.send("ERROR in DataBase")
  }
}) ;

app.listen("8080" , () => {
  console.log("server is live >>>>") ;
}) ;


// // our query
// try {
//   connection.query( query , [data] , (err,result) => {
//     if (err) throw err ;
//     console.log(result) ;
//   }) ;
// } catch(err){
//   console.log(err) ;
// }

// //closing the connection
// connection.end() ;