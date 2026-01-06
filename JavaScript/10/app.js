// btn = document.querySelector("button") ;
// console.dir(btn) ;
// way -1 : inline 
// way -2 :
    // btn.onclick = function() {
    //     alert("Don't Touch me") ;
    // } ;
// way -3 :
    // btn.onclick = sayHello ;
    function sayHello() {
        alert("Just Stop it already !?") ;
    } ;

// lets apply on multiple buttons - single value for one attribiute
    // let btns = document.querySelectorAll("button")
    // for( btn of btns ){
    //     // now onlick property is set for all buttons
    //     btn.onclick = sayHello ;  
    //     // remember that if we use sayHello() like this then 
    //     // property will not set , instead function will execute itself 
    //     // and then nothing will happen on buttons
    //     btn.onmouseenter = function (){
    //         console.log("You entered a button") ;
    //     }                        
                                  
    // }

// let's add multiple value for one attribute
// function sayName() {
//     alert("Its Aaryan") ;
// } 

// let btns = document.querySelectorAll("button") 
// for(btn of btns){
//     // btn.addEventListener("click",sayHello) ;
//     // btn.addEventListener("click",sayName) ;
//     btn.addEventListener("dblclick",function() {
//         console.log("You double clicked the button");
//     }) ;
// }

//event listener on elements
    // let para = document.querySelector("p") ;
    // para.addEventListener("mouseenter",function() {
    //     alert('Stop touching me') ;
    // }) ;

// this in event listener
    // how it works
        // let buttonT = document.querySelector(".for_this") ;
        // buttonT.addEventListener("click",function() {
        //     console.log(this) ;
        // }) ;
    
    // without this 
        // let h1 = document.querySelector("h1") ;
        // let h3 = document.querySelector("h3") ;
        // let p = document.querySelector("p") ;
        // let button = document.querySelector("button") ;

        // h1.addEventListener("click",function() {
        //     console.dir(this.innerText) ;
        //     this.style.backgroundColor = "grey" ;
        // }) ;

        // h3.addEventListener("click",function() {
        //     console.dir(this.innerText) ;
        //     this.style.backgroundColor = "grey" ;
        // }) ;

        // p.addEventListener("click",function() {
        //     console.dir(this.innerText) ;
        //     this.style.backgroundColor = "grey" ;
        // }) ;

        // button.addEventListener("click",function() {
        //     console.dir(this.innerText) ;
        //     this.style.backgroundColor = "grey" ;
        // }) ;
    // with this
        // let h1 = document.querySelector("h1") ;
        // let h3 = document.querySelector("h3") ;
        // let p = document.querySelector("p") ;
        // let button = document.querySelector("button") ;

        // function changeColor(){
        //     console.dir(this.innerText) ;
        //     this.style.backgroundColor = "yellow" ;
        // }

        // h1.addEventListener("click",changeColor) ;
        // h3.addEventListener("click",changeColor) ;
        // p.addEventListener("click",changeColor) ;
        // button.addEventListener("click",changeColor) ;
        
        
// Keyboard events -
    // teaching about default argument  - event
    // let btn = document.querySelector("button") ;
    // btn.addEventListener("click" , function(event) {
    //     console.log("clicked the button") ;
    //     console.log(event)
    // });

    // let inp = document.querySelector("input") ;
    // inp.addEventListener("keydown", function (event) {
    //     console.log("key is ",event.key) ;
    //     console.log("code of key is",event.code) ;
    //     console.log("Key was pressed...") ;
    // });

    // // Moving our Character
    // let charbtn = document.querySelector(".charbtn") ;
    // let charinp = document.querySelector(".charinp") ;

    // charinp.addEventListener("keydown", function(event) {
    //     //console.log('Code of the key :',event.code) ; // ArrowUp , ArrowDown , ArrowLeft  , ArrowRight
    //     if( event.code == "ArrowUp"){
    //         console.log("Character moves forward") ;
    //     } else if( event.code == "ArrowDown"){
    //         console.log("Character moves backward") ;
    //     } else if( event.code == "ArrowLeft"){
    //         console.log("Character moves left side") ;
    //     } else{
    //         console.log("Character moves right side") ;
    //     }
    // });

// form events -
    let form = document.querySelector("form") ;
    // form.addEventListener("submit" , function(event) {
    //     event.preventDefault() ;
    //     console.log("Form submitted !!") ;
    // });

    // extracting form data
    form.addEventListener("submit", function(event) {
        event.preventDefault() ;

        // let user = document.querySelector("#user") ;
        // let pass = document.querySelector("#pass") ;

        // console.log(user.value) ;
        // console.log(pass.value) ;

        //alert(`Hi ${user.value} , Your password is set to : ${pass.value}`) ;

        // different way to access form elements
        //let form = document.querySelector("form") ;
        //elements = form.elements ;
        //console.dir(elements) ;
        // for( el of elements){
        //     console.dir(el) ;
        // }



        let user = this.elements[0] ; // form.elements[0]
        let pass = this.elements[1] ;

        console.log(user.value) ;
        console.log(pass.value) ;
        alert(`Hi ${user.value} , Your password is set to : ${pass.value}`) ;
    });
                            
                                  
    