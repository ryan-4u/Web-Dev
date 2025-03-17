// #destructerig
let names = ['a','b','c','d','e'] ;
let winner = 'a';
let runnerup = 'b';
let others = ['c','d','e'];
// line 3 4 5 and line 7 are doing same thing
//let[winner,runnerup,...others] = names ;

// with objects
const student = {
    name : "karan" ,
    age : 14 ,
    class : 9 ,
    subjects : ['eng','hindi','maths','science'] ,
    username : "karan@123",
    password : "ancd" , 
    city : "Narwana"
};

// let {username,password} = student ;
// let {username : user , password : code} = student ;
let {username : user , password : code , city: place = "Haryana"} = student ;