function hello() {
    console.log("hello ji !!");
}

// function with arguments
function printName(name){
    console.log(name);
}
//now with multiple arguments
function printInfo(name,age,city){
    console.log(`${name}'s age is ${age} and lives in ${city} ...`);
}
// return keyword
function add(a,b) {
    return a+b ;
}
function isAdult(age) {
    if(age>=18){
        return "adult";
    } else {
        return "not adult";
    }
}
// function expressions
 const sum3 = function (a , b , c) {
     return (a*b)/c
 }
 // high order function
 // 1. fuction as argument
 function multiGreet(func , count){
     for(let i=1 ; i<=count ; i++){
        func();
     }
 }
 //2. retuens a function
 function oddEvenReq(request){
     if(request == "odd"){
         return function(n){
            console.log(!(n%2 == 0));
         }
     } else if (request == "even"){
         return function(n){
            console.log(n%2 == 0);
         }
     } else {
         console.log("wrong req")
     }
 }
 //methods
 const calculator = {
     add: function(a,b){
         return a+b ;
     },
     sub: function(a,b){
        return a-b ;
    },
    mul: function(a,b){
        return a*b ;
    }
 };