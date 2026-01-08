btn = document.querySelector("button") ;
ul = document.querySelector("ul") ;
li = document.querySelectorAll("li") ;
inp = document.querySelector("input") ;

btn.addEventListener("click", function() {

    let item = document.createElement("li") ; // vraeted a new list element
    item.innerText = inp.value ; // assigning input value to the item
    ul.appendChild(item) ; // appending item in ul as a child
    // adding delete button with new tasks 
    let X = document.createElement("button")
    X.innerText = "X" ;
    X.classList.add("del") ;
    item.appendChild(X) ;

    console.log(inp.value) ;
    inp.value = "" ; // to make input box empty after adding one value
});

// delBtns = document.querySelectorAll(".del") ;
// for( delBtn of delBtns ){
//     delBtn.addEventListener("click", function() {
//         let item = this.parentElement ;
//         item.remove() ;
//     });
// }

ul.addEventListener("click",function(event) {
    // console.dir(event.target) ;
    // console.dir(event.target.nodeName) ;
    if( event.target.nodeName == "BUTTON" ){
        item = event.target.parentElement ;
        item.remove() ;
        console.log(" got deleted") ;
    }
});
