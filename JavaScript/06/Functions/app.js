function hello() {
    console.log("hello ji !!");
}

// function with arguments
function printName(name){
    console.log(name);
}
//now with multiple arguments
function printInfo(name,age,city){
    console.log(`${name}'s age is ${age} and lives in ${city} ...`);
}
// return keyword
function add(a,b) {
    return a+b ;
}
function isAdult(age) {
    if(age>=18){
        return "adult";
    } else {
        return "not adult";
    }
}
