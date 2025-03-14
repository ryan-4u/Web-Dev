// 1. forEach
// => now-a-days for-of loop is in use
//    but forEach is used widely in past
//    for e.g.
        // 1. passing name in forEach
        let arr1 = [2,5,7,3,5];
        function print(el) {
            console.log(el) ;
        }  
        arr1.forEach(print);
        // 2. passing function in forEach
        let arr2 = [3,6,9,12,15];
        arr2.forEach( function(el) {
            console.log(el) ;
        });
        // 3. passing arrow function in forEach
        let arr3 = [0,1,2,3,4];
        arr3.forEach( (el) => {
            console.log(el) ;
        });
        // 4. using forEach for objects
        let arr4 = [
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
        arr4.forEach( (el) => {
            console.log(el.marks) ;
        });
// 2. map

// 3. filter

// 4. some

// 5. every

// 6. reduce