// spread
let arr = [2,3,4,5,6,7,8,9,0] ;
console.log(arr);
console.log(...arr) ;

// spread (array literals)
let newArr = [...arr];
console.log(newArr) ;
let chars = [...'i am aaryan and i love her...']
console.log(chars);
console.log(...chars);

// spread (object literals)
let data = {
    email : "ironman@gmail.com" ,
    password : 2345 
};

let dataCopy = { ...data , id:143 , country:'IND'};

//Rest
function sum(...args) {
    return args.reduce( (sum,el) => sum+el ) ;
}
function min(msg,...args) {
    console.log(msg);
    return args.reduce( (min,el) => {
        if(min>el) return el ;
        else return min ;
    });
}