// // 1. forEach
// // => now-a-days for-of loop is in use
// //    but forEach is used widely in past
// //    for e.g.
//         // 1. passing name in forEach
//         let arr1 = [2,5,7,3,5];
//         function print(el) {
//             console.log(el) ;
//         }  
//         arr1.forEach(print);
//         // 2. passing function in forEach
//         let arr2 = [3,6,9,12,15];
//         arr2.forEach( function(el) {
//             console.log(el) ;
//         });
//         // 3. passing arrow function in forEach
//         let arr3 = [0,1,2,3,4];
//         arr3.forEach( (el) => {
//             console.log(el) ;
//         });
//         // 4. using forEach for objects
        // let arr4 = [
        // {
        //     name : "aman" ,
        //     marks : 78 
        // },
        // {
        //     name : "rahul" ,
        //     marks : 56
        // },
        // {
        //     name : "ramesh" ,
        //     marks : 89
        // }
        // ];
//         arr4.forEach( (el) => {
//             console.log(el.marks) ;
//         });


// 2. map
// works like forEach , just stores the output
// when function uses each element and return
// the outputs in a array 
// for e.g.
let num = [1,2,3,4];
let double = num.map( function (el)  {
    return el*el ;
}) ;

let students = [
    {
        name : "aman" ,
        marks : 78 
    },
    {
        name : "rahul" ,
        marks : 56
    },
    {
        name : "ramesh" ,
        marks : 89
    }
    ];
let gpa = students.map( (el) => 
        el.marks/10
);
//note: in case of function doesn't returns any value
//      array will stil be formed with undefined as values


// 3. filter
// it also returns an array like map but it doesn't return 
// all the values , it return only values which are true 
// after passing through the function
// for e.g.
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let even = nums.filter( (num) => {
   return num%2 == 0 ; // even -> true , odd -> false
});


 
// 4. every
// returns true if every element of array
// gives true otherwise returns false
let check1 = nums.every( (num)=> {
    return num%2 == 0 ; // even -> true , odd -> false
});
let check2 = even.every( (num)=> {
    return num%2 == 0 ; 
});
// basically #behaves_like_LOGICAL_AND

// 5. some
//   #behaves_like_LOGICAL_OR


// 6. reduce
// reduces array to a single value
// let number = [1,2,3,4] ;
// let finalValue = number.reduce( (res,el) => {
//     console.log(res);
//     return res+el ; 
// });
// console.log(finalValue) ;
 // findig max value in array using reduce method
let array = [23,45,67,54,31,89] ;
let maxValue = array.reduce( (max,checker) => {
    if(max<checker) return checker ;
    else return max ;
});