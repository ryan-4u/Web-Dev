btn = document.querySelector("button") ;

function getRandomColor(){
    let red = (Math.floor(Math.random()*255)) ;
    let green = (Math.floor(Math.random()*255)) ;
    let blue = (Math.floor(Math.random()*255)) ;
    // color = rgb(red,green,blue) ; // rgb is not a function - use string literal
    
    let color = `rgb(${red},${green},${blue})` ;
    return color ;
}

btn.addEventListener("click",function() {
    randomColor = getRandomColor() ;
    h3 = document.querySelector('h3') ;
    h3.innerText = randomColor ;
    div = document.querySelector('div') ;
    div.style.backgroundColor = randomColor ;

    console.log("Color updated") ;
}) ;
