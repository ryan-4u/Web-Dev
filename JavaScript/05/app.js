// const student = {
//     name :"aaryan" ,
//     age : 17 ,
//     marks : 82.4 
// };

// // Twitter post
// const post = {
//     username : "aaryan" ,
//     content :"health is wealth" ,
//     likes : 234 ,
//     repost : 17 ,
//     tags : ["@aman" , "@rahul" , "@monika"]
// };

// const obj = {
//     1 : 'a' ,
//     2 : 'b' ,
//     null : 'c' ,
//     true : 'd' ,
//     undefined : 'e'
// };

let student = {
    name : "aaryan" ,
    age : 20 ,
    marks : 82.4 ,
    city : "Ambala"
};

let classInfo = {
    aman :{
        grade : "A+",
        city : "Delhi",
    },
    shradha : {
        grade : "A+",
        city : "Mumbai",
    },
    karan :{
        grade : "A-",
        city : "Haryana",
    }
};
console.log("Generating random no b/w 1 to 10");
let num = Math.random();
num = num*10 ;
num = Math.floor(num) ;
num = num + 1 ;
 
// 1 to 100
r1to100 = Math.floor(Math.random()*100) + 1 ;
r1to5 = Math.floor(Math.random()*5) + 1 ;