let pencil= 10 ;
let eraser = 5 ;
//method - 01 
console.log("the total price is:" , pencil+eraser , "rupees.");
//method - 02
let output = " total price is:" + (pencil+eraser) + "rupees.";
console.log(output);
//mehod with template literals
output = ` total amount is:  ${pencil+eraser} rupees.`;
console.log(output);
console.log(` paying amount is:  ${pencil+eraser} rupees.`);