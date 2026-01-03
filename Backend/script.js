// running a js file in nodejs
    // let n = 5 ;
    // for (let i = 1; i <= n; i++) {
    //     console.log("hello no " ,i);
    // }

// using process object
    // console.log(process.argv)

//using module.exports
    // const math = require("./math") ;
    // console.log(math.sum(5, 10)) ;
    // console.log(math.mul(5, 10)) ;
    // console.log(math.g) ;
    // console.log(math.PI) ;

// exporting a directory
    // const fruitsInfo = require("./Fruits") ;
    // console.log(fruitsInfo) ;

// using import
    import {sum,PI} from "./math.js" ;
    console.log(sum(10,20)) ;
    console.log(PI) ;

// using random-word package
import {generate} from 'random-words' ;
console.log(generate()) ;