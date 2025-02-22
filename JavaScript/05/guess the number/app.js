const max = prompt("Enter maximum number");

let num = Math.floor(Math.random()*max) + 1 ;
console.log(num);

let guess = prompt("guess the number") ;
while(1){
    if(guess == "quit"){
        console.log("quitting the game .....");
        break;
    } else if ( guess == num){
        console.log("Congratulations !! your guess is right");
        break ;
    } else {
        if (guess > num){
            guess = prompt("guess is high !! please try again");
        } else {
            guess = prompt("guess is low !! please try again");
        }
    }
    
}