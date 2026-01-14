// how callback hell happens --

//h1 = document.querySelector("h1") ;

// way - 1
// setTimeout( () => {
//     h1.style.color = "red" ;
// } , 2000) ;

// setTimeout( () => {
//     h1.style.color = "steelblue" ;
// } , 4000) ;

// setTimeout( () => {
//     h1.style.color = "Orange" ;
// } , 6000) ;

// way - 2
// function changeColor( color, delay ){
//     setTimeout( () => {
//         h1.style.color = color ;
//     } , delay);
//}

// changeColor("red",1000) ;
// changeColor("orange",1000) ;
// changeColor("green",1000) ;

// this will be changing color directly to green as all happen at same time 
// so we need to give calculated time
//changeColor("red",1000) ;
//changeColor("orange",2000) ;
//changeColor("green",3000) ;


// way - 3 // callback hell
// function changeColor( color , delay , nextColorChange ) {
//     setTimeout( () => {
//         h1.style.color = color ;
//         if(nextColorChange){
//             nextColorChange() ;
//         }
//     },delay) ;
// }

// changeColor( "red" , 1000 , () => {
//     changeColor( "orange" , 1000 , () => {
//         changeColor( "green" , 1000 , () => {
//             changeColor( "blue" , 1000 ) ;
//         } ) ;
//     } ) ;
// } ) ;

// coverting code with promises

h1 = document.querySelector("h1") ;
function changeColor(color,delay){
    delay = 1000 ;
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            h1.style.color = color ;
            console.log(`color changed to ${color}`) ;
            resolve() ;
        },delay); 
    })
}

// this method will work

// changeColor("black")
//     .then( (result) => {
//         console.log("result is : ",result) ;
//         return changeColor("yellow") ;
//     })
//     .then( (result) => {
//         console.log("result is : ",result) ;
//         return changeColor("blue") ;
//     })
//     .then( (result) => {
//         console.log("result is : ",result) ;
//         return changeColor("green") ;
//     })
//     .then( (result) => {
//         console.log("result is : ",result) ;
//     })
//     .catch( () => {
//         console.log("NO change in color") ;
//     })


// but with await keyword , its more easy 


async function changingColor(){
    await changeColor("red");
    await changeColor("blue");
    await changeColor("black");
    await changeColor("yellow");
    await changeColor("green");
    await changeColor("brown");
    await changeColor("gold");
}

changingColor()