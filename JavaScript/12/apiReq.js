let url = "https://catfact.ninja/fact";
//fetch(url) ;

// using promise methods
// fetch(url) 
// .then( (res) => {
//     return res.json() ;
// })
// .then( (data) => {
//     console.log(data) ;
//     return fetch(url) ;
// })
// .then( (res) => {
//     return res.json() ;
// })
// .then( (data) => {
//     console.log(data) ;
//     return fetch(url) ;
// })
// .then( (res) => {
//     return res.json() ;
// })
// .then( (data) => {
//     console.log(data.fact) ; // getting only fact from data
// })
// .catch( (err) => {
//     console.log("Error - ",err) ;
// })


// using async await for same work

async function getFacts(){
    try{
        let res = await fetch(url) ; // it's async so we need to wait to get response - so await - otherwise js will run all sync code
        let data  = await res.json() ;
        console.log(data.fact);
    } catch(err) {
        console.log("Error - " , err);
    } 

    //console.log("Function call is done");
}

for( let i=0 ; i<5 ;i++){
    getFacts();
}


