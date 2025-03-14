// arrow function that returns square of number
const square = (n) => ( n*n ) ;
console.log(square(4));
console.log(square(7));
 //function that prints "hello world" 5 times with a 2s interval
let conPrint = setInterval(() => { // saving set interval in a  
    console.log("hello world !") ; // variable also stores it's id
}, 2000);                          // to clear interval it
setTimeout( () => {
    clearInterval(conPrint) ;
    console.log("clear interval ran") ;
},10000);                                    