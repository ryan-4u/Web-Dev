const mongoose = require('mongoose'); // getting mongoose 
//mongoose.connect('mongodb://127.0.0.1:27017/test'); // connecting our db 

// handling connect to mongodb ASYNCRONUSLY
main()
    .then( (res) => {
        console.log("connection formed") ;
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema( {
    title:{
        type : String ,
        required: true ,
        maxLength : 20
    },
    author:{
        type : String
    },
    price: {
        type: Number ,
        min: 1
    },
    discount :{
        type: Number ,
        default:0
    },
    category:{
        type: String ,
        enum : ["fiction","non-fiction"] ,
        default: "fiction" 
    }
}) ;

const Book = mongoose.model("Book",bookSchema) ;

const book1 = new Book( {
    title: "Gone Girl" ,
    price: "399"
})
book1.save();