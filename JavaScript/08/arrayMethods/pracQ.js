// check if all number in our array id multiple of 10 or not
let num = [10,20,30,40,5,120] ;
let mulTen = num.every( (el) => el%10 == 0 );
//create a function to find min in the array
let array = [9,23,45,67,54,31,89] ;
let minValue = array.reduce( (min,checker) => {
    if(min>checker) return checker ;
    else return min ;
});