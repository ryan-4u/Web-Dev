let gameSeq = [] ;
let userSeq = [] ;

let started = false ; // game is started or not
let level = 0 ;

let h2 = document.querySelector("h2") ;

let btns = ['one','two','three','four'] ;

document.addEventListener("keypress", function(){
    // making game starts only once 
    if( started == false){
        console.log("Game started") ;
        started = true

        levelUp() ;
    }
});


//adding event listener for buttons when clicked by user 
let buttons = document.querySelectorAll(".btn") ;
for(let btn of buttons){
    btn.addEventListener("click",btnPress) ;
}

function checkAns(idx){
    //console.log("Current Level : ",level) ;
    
    if( userSeq[idx] === gameSeq[idx] ){
        if(userSeq.length ==gameSeq.length){
            setTimeout( levelUp ,  1000 ) ;
        }
    } else{
        h2.innerHTML = `Game OVER ! Your score was <b>${level}</b> <br> Press any key to restart` ;
        document.querySelector("body").style.backgroundColor = "red" ;
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white" ;
        } ,150 ) ;
        reset() ;
    }
}
// for button flash 
function gameFlash(btn){
    btn.classList.add("flash") ;
    setTimeout( function () {
        btn.classList.remove("flash");
    } , 200 ) ;
}
//for btn flash by user clicking 
function userFlash(btn){
    btn.classList.add("user-flash") ;
    setTimeout( function () {
        btn.classList.remove("user-flash");
    } , 200 ) ;
}

// levelup
function levelUp() {
    userSeq = [] ;
    level++ ; 
    h2.innerText = `Level ${level}` ;

    let randIdx = Math.floor(Math.random()*4) ; //random no to choose random btn
    let randBox = btns[randIdx] ;
    let randBtn = document.querySelector(`.${randBox}`) ;

    //pushing seq in gameSeq array
    gameSeq.push(randBox) ;
    //console.log(gameSeq) ;

    gameFlash(randBtn) ;
}

//when user do press the button
function btnPress(){
    //console.log(this) ; //print for which function get applied - basically gives button
    let btn = this ;
    userFlash(btn) ;
    
    userBtn = btn.getAttribute("id") ;
    userSeq.push(userBtn) ;
    //console.log(userSeq) ;

    checkAns(userSeq.length - 1) ;
}

// for reset after game is over
function reset(){
    gameSeq = [] ;
    userSeq = [] ;
    level = 0 ;
    started = false ;
}