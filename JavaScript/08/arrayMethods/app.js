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

// 4. some

// 5. every

// 6. reduce