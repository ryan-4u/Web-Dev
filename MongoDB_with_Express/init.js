const mongoose = require("mongoose") ;
const Chat = require("./models/chat.js") ;

main()
  .then( (res) => {
    console.log("connection successful") ;
  })
  .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let chatData = [
    {
        from : "Ankush" ,
        to : "Eveyone" ,
        msg : "If everyone is ready , sure.",
        created_at : new Date() 
    },
    {
        from : "Harsh" ,
        to : "Aaryan" ,
        msg : "I Don't know what project is about",
        created_at : new Date() 
    },
    {
        from : "Aaryan" ,
        to : "Prince" ,
        msg : "Give details of project to Harsh",
        created_at : new Date() 
    },
    {
        from : "Aaryan" ,
        to : "Eveyone" ,
        msg : "Starting our Project from this Monday",
        created_at : new Date() 
    }
] ;

Chat.insertMany(chatData) ;