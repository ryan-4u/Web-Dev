// creating an async function
async function greet() {
    return "hello " ; // returns a promise
}

// creating an async arrow function
let demo = async () => {} ; // returns a promise


async function sayHello() {
    //throw("Who the funck are you")
    return "hello " ; 
}
// sayHello()
// .then( (result) => {
//     console.log(" resolved with result :" , result) ;
// })
// .catch( (error) => {
//     console.log(" rejected with error :" , error) ;
// }) ;


// await keyword use
function getNum(){
    return new Promise( (resolve,reject) => {
         let num = Math.floor( Math.random() *10) + 1 ;
        // for how to handle rejections
        if (num>7){
            reject(" Upper Range of Numbers") ;
        } else {
            setTimeout( () => {
                console.log("Number is: ",num) ;
                resolve() ;
            },1200) ;
        }
    });
}

// async function numbers() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }
async function numbers() {
    try{
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        await getNum();
    } catch( err ) {
        console.log(" rejected due to error: ",err) ;
    }

    // checking if further code is executed when error
        let arr = [1,2,3,4,5,6,7] ;
        for( el of arr){
            console.log(el) ;
        }
}
numbers() ;