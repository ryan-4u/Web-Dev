// ans 01
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr) {
        total += number ;
    }
    return total/arr.length ;
};
// ans 02
const isEven = a => {
    if (a%2 == 0) console.log("a is even. ");
    else console.log("a is not even. ");
}
//ans 03
// const object = {
//     message : 'Hello,World!', 
//     logMessage() { 
//         console.log(this.message) ;
//     }
// };

// setTimeout(object.logMessage,1000);
// ans 04
let length = 4 ;
function callback() { 
    console.log(this.length) ;
}
const object = { 
    length : 5 ,
    method (callback) {
        callback();
    },
};

object.method(callback,1,2);