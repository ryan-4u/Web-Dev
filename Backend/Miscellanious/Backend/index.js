const express = require("express") ;
const app = express() ;
const port = 8080 ;

app.use( express.urlencoded( {extended: true}) ) ;
app.use( express.json() ) ;

app.get("/register", (req,res) => {
    let {user,pass} = req.query ;
    res.send(`standard GET response. Welcome ${user} with password : ${pass}`) ;
});

app.post("/register", (req,res) => {
    let {user,pass} = req.body ;
    res.send(`standard POST response. Welcome ${user} with password : ${pass}`) ;
});

app.listen(port,() => {
    console.log(`Listening to Port ${port}`) ;
})
