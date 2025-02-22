console.log('Write "quit" to quit the game');
const favorite = "spiderman";
let guess = prompt("GUESS THE MOVIE");
while(guess != favorite){
    if(guess == "quit"){
        console.log("You have quit ");
        break;
    }
     guess = prompt("Wrong Guess , PLEASE TRY AGAIN !!");
}
if(guess == favorite){
    console.log("CONGRATS !! Your guess is RIGHT.");
}  