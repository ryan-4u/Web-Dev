const express = require("express") ;
const app = express() ;
const ExpressError = require("./ExpressError") ;
// //middleware
// app.use( (req,res,next) => {
//     console.log(" Hi i am  1stMiddleware ") ;
//     // res.send("Middleware ended...")
//     next() ;
// });

// app.use( (req,res,next) => {
//     console.log(" Hi i am 2nd Middleware ") ;
//     next() ;
// });

//logger
// app.use( (req,res,next) =>{
//     req.time = new Date( Date.now()).toString() ;
//     console.log(req.method , req.hostname ,req.path ,req.time) ;
//     next() ;
// }) ;

//api token midleware
app.use("/api" ,(req,res,next) =>{
    let {token} = req.query ;
    if( token == "giveaccess"){
        next()
    }
    throw new ExpressError(401 ,"Access denied") ;
}); 

app.get("/api" , (req,res) => {
    res.send("data") ;
});

app.get( "/" , (req,res) => {
    res.send("Hi i am Groot") ;
});

app.get( "/random" , (req,res) => {
    res.send("This is a Random page") ;
});

app.get("/err" ,(req,res) => {
    abcd = abcd ;  
})
// admit route activity
app.get("/admin", (req,res) =>{
    throw new ExpressError(403,"ACCESS is Forbidden") ;
});

// error handling
app.use( (err ,req,res ,next) =>{
   console.log("ERROR middleware 01");
   next(err) ;
}) ;
app.use( (err ,req,res ,next) =>{
   console.log("ERROR middleware 02");
   let {status = 500,message ='Error' } = err ;
   res.status(status).send(message) ;
}) ;
app.listen( 8080 , () => {
    console.log("server is listening..") ;
}) ;