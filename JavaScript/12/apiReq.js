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

// async function getFacts(){
//     try{
//         let res = await fetch(url) ; // it's async so we need to wait to get response - so await - otherwise js will run all sync code
//         let data  = await res.json() ;
//         console.log(data.fact);
//     } catch(err) {
//         console.log("Error - " , err);
//     } 

//     //console.log("Function call is done");
// }

// for( let i=0 ; i<5 ;i++){
//     getFacts();
// }


// using axios for same code - for more compact and better way
async function getFacts(){
    try{
        let res = await axios.get(url) ; // it's async so we need to wait to get response - so await - otherwise js will run all sync code
        //console.log(res);
        //console.log(res.data) ; // direct data
        // console.log(res.data.fact) ; // direct fact , as we need this in this case
        return res.data.fact ;

    } catch(err) {
        console.log("Error - " , err);
        return "No fact found" ;
    } 

    //console.log("Function call is done");
}

// getting cat fact on our html page
let btnFact = document.querySelector("#fact") ;
let para = document.querySelector("p") ;
btnFact.addEventListener("click", async() => {
    let fact = await getFacts() ;
    console.log(fact);
    para.innerText = fact ;
});

// using dog api to get cute dog image
urlImage = "https://dog.ceo/api/breeds/image/random" ;
let btnImg = document.querySelector("#img")

async function getDogImg(){
    try{
        let res = await axios.get(urlImage) ;
        //console.log(res.data); // give direct data
        //console.log(res.data.message) ;
        return res.data.message ;
    } catch(e) {

        return '/' ; // returning random url
    }
}

btnImg.addEventListener("click" , async() => {
    let link = await getDogImg() ;
    console.log(link) ;
    let img = document.querySelector("img")
    img.setAttribute("src",link) ;
})

// sending headers in api requests
getJokeUrl = "https://icanhazdadjoke.com/" ;
async function getJokes() {
    try{
        const config = { headers: { Accept : "application/json" }}
        let res = await axios.get(url,config) ;
        console.log(res.data) ;
    } catch(err) {
        console.log(err) ;
    }
}
