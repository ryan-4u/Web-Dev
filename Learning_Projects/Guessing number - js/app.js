let max = prompt("Enter the maximum number");
let random = Math.floor(Math.random() * max) + 1;

let guess = 0;

// while (true) {
//     guess = prompt("Enter your guess between 1 and " + max);  
//     if (guess == "exit") {
//         alert("Game exited. The number was " + random);
//         break;
//     }

//     if (guess < random  ) {    
//         alert("Too low! Try again.");
//     } else if (guess > random) {
//         alert("Too high! Try again.");
//     } else if (guess == random) {
//         alert("Congratulations! You guessed the number " + random + " correctly!");
//         break;
//     } else {
//         alert("Invalid input. Please enter a number between 1 and " + max);
//     }
// }