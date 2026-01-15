let url = "http://universities.hipolabs.com/search?name=" ;

let btn = document.querySelector("button") ;
btn.addEventListener( "click" , async () => {
    let country = document.querySelector("input").value ;
    console.log(country);
    let collArr = await getColleges(country) ;
    console.log(collArr) ;
    show(collArr)
} ) 

function show(array){
    let list = document.querySelector("#list") ;
    list.innerText = "" ; // to make list with 0 element for each search
    for(clg of array){
        console.log(clg.name);

        let li = document.createElement("li") ;
        li.innerText = clg.name ;
        list.appendChild(li) ;
    }
}

async function getColleges(country) {
    try{
        let res = await axios.get(url+country) ;
        return res.data ;
    } catch(err) {
        console.log("error : ",err) ;
        return [] ;
    }
}