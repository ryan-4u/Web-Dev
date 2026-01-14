// callback hell

// function saveToDb( data , success , failure ){
//     let intSpeed = (Math.floor( Math.random() * 10 )) + 1 ;
//     if (intSpeed>4){
//         success() ;
//     } else {
//         failure() ;
//     }
// }

// saveToDb( 
//     "Software develepor" , 
//     () => {
//         console.log("Data 01 is saved") ;
//         saveToDb( 
//             "Website develepor" , 
//             () => {
//                 console.log("Data 02 is saved") ;
//                 saveToDb( 
//                     "Frontend develepor" , 
//                     () => {
//                         console.log("Data 03 is saved") ;
//                     } , 
//                     () => {
//                         console.warn("data 03 failed to save") ;   
//                     }
//                 );
//             } , 
//             () => {
//                 console.warn("data 02 failed to save");
//             }
//         );
//     } , 
//     () => {
//     console.warn("data 01 failed to save") ;
//     }
// );

// now using promises
function saveToDb(data){
    return new Promise( (resolve,reject) => {
        let intSpeed = Math.floor( Math.random() * 10) + 1 ;
        if( intSpeed>4) {
            resolve(" success : data is saved ") ;
        } else {
            reject( " failure : weak connection") ;
        }
    });
}

// using then() and catch() methods of promise object

// let request = saveToDb("aaryan") ;
// request
//     .then( () => {
//         console.log("promise was resolved") ;
//     })
//     .catch( () => {
//         console.log("promise was rejected") ;
//     }) ;

// compact way
// saveToDb("aaryan") 
//     .then( () => {
//         console.log("promise was resolved") ;
//     })
//     .catch( () => {
//         console.log("promise was rejected") ;
//     }) ;

// promise chaining
// saveToDb("aaryan") 
//     .then( () => {
//         console.log("promise data 01") ;
//         saveToDb("agrawa")
//         .then( () => {
//             console.log("Promise data 02") ;
//         }) 
//     })
//     .catch( () => {
//         console.log("promise was rejected") ;
//     }) ;


// but this also looks nesting callback , callback hell
// so final improved version
saveToDb("aaryan") 
    .then( (result) => {
        console.log("promise data 01") ;
        console.log(" promise result is : ",result)
        return saveToDb("is a Software Developer") ;
    })
    .then( (result) => {
        console.log("promise data 02") ;
        console.log(" promise result is : ",result)
        return saveToDb("is a Website Developer") ;
    })
    .then( (result) => {
        console.log("promise data 03") ;
        console.log(" promise result is : ",result)
        return saveToDb("is a Frontend Developer") ;
    })
    .then( (result) => {
        console.log("promise data 04") ;
        console.log(" promise result is : ",result)
    }) 
    .catch( (error) => {
        console.log("promise was rejected") ;
        console.log(" promise error is : ",error)
    }) ;


