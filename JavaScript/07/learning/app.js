// "This" keyword
let student = {
    name : "aaryan" ,
    city : "ambala" ,
    age : 19 ,
    phy : 89 ,
    che : 96 ,
    math : 100 , 
    marks() {
        //lets print "this"
        console.log(this);
        // need to use this here
        let avg = (this.phy + this.che + this.math) / 3 ;
        console.log(avg);
    }
};
// try and catch 
console.log("hello") ;
console.log("hello") ;
let a = 5 ;
try{
    console.log(a) ;
} catch {
    console.log("error found.. a doesn't exist");
}    
console.log("hello2") ;
console.log("hello2") ;
console.log("hello2") ;
