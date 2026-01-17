// basic server setup
const express = require("express") ;
const app = express() ;
const port = 8080 ;
const path = require("path") ; // to set path of views and public

const methodOverride = require('method-override') // used to sent request to patch,delete,put

const { v4 : uuidv4 } =  require('uuid'); // for creating unique id for each post

// making sure data will be understood by express
app.use( express.urlencoded( {extended : true} ) );
app.use( express.json() );

app.use(methodOverride('_method')) ; // override with POST having ?_method=DELETE


app.set( "view engine" , "ejs" ) ; // setting view engine
app.set( "views",path.join(__dirname , "views") ) ;// setting view directory path

app.use( express.static(path.join(__dirname , "public" )));//setting public directory path

//database
let posts = [
    {
        id : uuidv4() , 
        username : "aaryan" ,
        content : "I have build my first project : AirBnB Clone"
    },
    {
        id : uuidv4() , 
        username : "ankush" , 
        content : "I haven't even started Coding and companies are coming starting next month for placements"
    },
    {
        id : uuidv4() , 
        username : "aman" ,
        content : "My diploma will be completed in 6 months from now"
    }
] ;

//index route
app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts})
}) ;

//create route
    // adding post data via form
app.get("/posts/new", (req,res) => {
    res.render("new.ejs") ;
}) ;

    // form will send a post request 
    // to load new post Posts page
app.post( "/posts" , (req,res) => {
    //console.log(req.body) ;
    let { username , content } = req.body ;
    id =  uuidv4() ;
    posts.unshift( { id , username , content } ) ;
    //res.send("Post request working ...")
    res.redirect("/posts")
}) ;

// show route
app.get( "/posts/:id" , (req,res) => {
    let { id } = req.params ;
    let post = posts.find( (p) => id == p.id ) ;
    res.render( "show.ejs", {post} );
});

//update route ( patch req )
app.patch( "/posts/:id" , (req,res) => {
    let { id } = req.params ;
    let newContent = req.body.content ;
    let post = posts.find( (p) => id == p.id ) ;
    post.content = newContent ;
    console.log(post) ;
    
    res.redirect("/posts") ;
}) ;
// edit route to serve edit form
app.get( "/posts/:id/edit" , (req,res) => {
    let { id } = req.params ;
    let post = posts.find( (p) => id == p.id ) ;
    res.render("edit.ejs", {post} ) ;
}) ;

//destroy route
app.delete( "/posts/:id" , (req,res) => {
    let { id } = req.params ;
    // to filter out this post
    posts = posts.filter( (p) => id !== p.id ) ;  
    res.redirect("/posts") ;
    res.send("deleted") ;

});

// to start server
app.listen(port ,() => {
    console.log(`Listening to port : ${port}`) ;
}) ;
console.log(posts[0].id)