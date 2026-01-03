// explicitly exporting a number
    // module.exports = 123 ;
// explicitly exporting a string
    // module.exports = "hello world" ;

//------------------------------------------------------
// const sum = (a, b) => { return a + b; } ;
// const mul = (a, b) => { return a * b; } ;
// const g = 9.8 ;
// const PI = 3.14 ;

// exporting multiple values using an object
    // method 1
        // let obj = { 
        //     sum: sum , 
        //     mul: mul , 
        //     g: g , 
        //     PI: PI 
        // } ;
        // module.exports = obj ;

    // method 2 
        // module.exports = { 
        //     sum: sum , 
        //     mul: mul , 
        //     g: g , 
        //     PI: PI 
        // } ;

//----------------------------------------------------------
    // method - 3
        // module.exports.sum = (a,b) => { return a + b; } ;
        // module.exports.mul = (a,b) => { return a * b; } ;
        // module.exports.g = 9.8 ;
        // module.exports.PI = 3.14 ; 
    
    // method - 4
        exports.sum = (a,b) => { return a + b; } ;
        exports.mul = (a,b) => { return a * b; } ;
        exports.g = 9.8 ;
        exports.PI = 3.14 ;

