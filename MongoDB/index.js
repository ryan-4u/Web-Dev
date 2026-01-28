const mongoose = require('mongoose'); // getting mongoose 
//mongoose.connect('mongodb://127.0.0.1:27017/test'); // connecting our db 

// handling connect to mongodb ASYNCRONUSLY
main()
    .then( (res) => {
        console.log("connection formed") ;
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

// defining our schema 
const  userSchema = new mongoose.Schema( {
    name : String ,
    email : String ,
    age : Number
}) ;

// creating our model 
const User = mongoose.model("User",userSchema) ;

User.deleteOne( {name:"Eve"}).then( (res) => {
    console.log(res) ;
}).catch( (err) => {
    console.log(err) ;
});

// User.findOneAndUpdate( {name:"Bruce"},{age:25},{new:true}).then( (res) => {
//     console.log(res) ;
// }).catch( (err) => {
//     console.log(err) ;
// });

// User.updateMany( { age: {$gt:25}}, {age:15}).then( (res) => {
//     console.log(res) ;
// }).catch( (err) => {
//     console.log(err) ;
// });

// User.updateOne( {name : "Bruce"} , {age:73}).then( (res) => {
//     console.log(res) ;
// }).catch( (err) => {
//     console.log(err) ;
// });

// User.findOne({ name:"Bruce"}).then( (res) =>{
//     console.log(res) ;
// }).catch( (err) => {
//     console.log(err) ;
// }) ;

// User.insertMany( [
//     { name:"Tony" , email:"tony@gmail.com" , age:19} ,
//     { name:"Peter" , email:"peter@gmail.com" , age:30} ,
//     { name:"Bruce" , email:"bruce@gmail.com" , age:23} ,
// ]).then( (data) => {
//     console.log(data) ;
// })

// user2 = new User( {
//     name : "Eve" ,
//     email : "eve@yahoo.com" ,
//     age : 17
// });

// user2.save()
//     .then( (res) => {
//         console.log(res) ;
//     })
//     .catch( (err) => {
//         console.log(err) ;
//     }) ;