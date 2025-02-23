
// practice question 06
let arr = ['My','Name','Is','Aaryan','!'];
function concString(arr){
    let largeStr = '';
    for(let i=0 ;i<arr.length;i++){
        largeStr += arr[i] ;
    }
    return largeStr ;
}

//practice question 05
function sumOfNum(n) {
    let add = 0 ;
    for( let i=1 ; i<=n ; i++){
        add = add + i ;
    }
    return add ;
}

// practice question 04
function printTable(n){
    for(let i=n ; i <= n*10 ; i = i+n){
        console.log(i);
    }
}

// practice question 03
function avgOfThree(a,b,c){
    let avg = (a + b + c) / 3;
    console.log(avg);
}

// practice question 02
function rollDice(){
    let num = Math.floor(Math.random()*6)+ 1;
    console.log(num);
}

// practice question 01
function printPoem() {
    console.log("jhonny jhoony ... yes papa");
    console.log("eating sugar ... no papa");
    console.log("telling a lie ... no papa");
    console.log("open your mouth ... ha ha ha");
}