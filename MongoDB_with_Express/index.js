const express = require("express") ;
const app = express() ;
const mongoose = require("mongoose") ;
const path = require("path") ;

const methodOverride = require("method-override") ; // to use methods other than get and put in form
// requiring chat model
const Chat = require("./models/chat.js") ;

app.set("view engine" , "ejs") ;
app.set( "views" , path.join( __dirname , "views")) ;
app.use(express.static(path.join(__dirname, "public"))) ;
app.use(express.urlencoded ({ extended : true}) ) ; // to make form data parse
app.use( methodOverride("_method") ) ;

main()
  .then( (res) => {
    console.log("connection successful") ;
  })
  .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// index route
app.get("/chats" , async(req,res) => {
    let chats = await Chat.find() ;
    // console.log(chats) ;
    res.render("index.ejs",{chats}) ;
}) ;

//new route
app.get("/chats/new", (req,res) => {
    res.render("new.ejs") ;
})
//create route
app.post( "/chats" , (req,res) => {
    let {from , to , msg } = req.body ; // collecting form data
    //creating chat with form data
    let newChat = new Chat({
        from : from ,
        to : to ,
        msg : msg ,
        created_at : new Date() 
    }) ;
    //adding this chat
    newChat
     .save()
     .then((res) => {
        console.log("chat added") ;
     })
     .catch((err) => {
        console.log(err) ;
     });
    
    res.redirect("/chats")
}) ;


// edit route
app.get("/chats/:id/edit" , async (req,res) =>{
    let {id} = req.params ;
    let selectedChat = await Chat.findById(id) ; // getting chat may take time , its going to be async

    res.render("edit.ejs", { chat : selectedChat } ) ;
}) ;
//update route
app.put("/chats/:id" , async (req,res) => {
    let {id} = req.params;
    let { msg : newMsg } = req.body ;
    console.log(newMsg) ;
    let updatedChat = await Chat.findByIdAndUpdate(
        id , 
        {msg :newMsg} ,
        {runValidators:true , new:true}
    );
    console.log(updatedChat) ;
    res.redirect("/chats") ;
}) ;

//destroy route
app.delete( "/chats/:id" , async (req,res) => {
    let { id } = req.params ;
    let deletedChat = await Chat.findByIdAndDelete(id) ;
    console.log(deletedChat) ;
    res.redirect("/chats") ;
})


// adding chat
// chat1 = new Chat( {
//     from : "Aaryan" ,
//     to : "Ankush" ,
//     msg : "Let's start working on Project",
//     created_at : new Date() 
// }) ;
// chat1.save() ;

app.get("/" , (req,res) => {
    res.send("root is working..") ;
});

app.listen(8080 ,() => {
    console.log("server is listening") ;
});