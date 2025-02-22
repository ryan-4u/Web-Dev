// for(let i=0 ; i<5 ;i++){
//     console.log(i);
// }
// //backward loop
// for(let i=10 ; i>=1 ;i=i-3){
//     console.log(i);
// }
// // printing odd numbers from 1 to 15
// console.log("odd number");
// for(let i=1 ; i<=15 ;i++){
//     if(i%2 != 0){
//         console.log(i);
//     }    
// }
// // printing even numbers from 1 to 15
// console.log("even number");
// for(let i=1 ; i<=15 ;i++){
//     if(i%2 == 0){
//         console.log(i);
//     }    
// }
// printing odd numbers from 1 to 15
// console.log("Multiplication Table of 5");
// for(let i=5 ; i<=50 ;i=i+5){

//         console.log(i);  
// }
// let n = prompt("write your number"); //prompt take in a integer
// n = parseInt(n) ; //parseInt will select integer part of a string
// for(let i=n ; i<=n*10 ; i = i+n){
//     console.log(i);
// }
// console.log("Nested loops");
// for(let i=1; i<=3 ; i++){
//     for(let j=1; j<=3 ; j++){
//         console.log(j);
//     }    
// } 
// console.log("While loop");
// let i = 0 ;
// while(i<=7){
//     console.log(i);
//     i++;
// }
// for(let i=0 ; i<5 ;i++){
//     if(i==4){
//         break;
//     }
//     console.log(i);
// }
console.log("Loops with Arrays");
let fruits = ["apple","orange","mango","banana","berry"];

for(let i=0; i<fruits.length ; i++){
    console.log(i, fruits[i]);
}