// Checking Object Prototype -->>
    // let arr = [1,2,3,4] ;
    // let obj = {
    //     1 : "aaryan" ,
    //     2 : "agrawa" 
    // }
    // let str = "ghh" ;

// Factory Function
    // function PersonMaker(name,age){
    //     const person = {
    //         name : name ,
    //         age : age ,
    //         talk() {
    //             console.log(`My name is ${this.name}` ) ;
    //         }
    //     }

    //     return person ;
    // }
    // p1 = PersonMaker("Aaryan",21) ;

// new operator
    //creating - constructor
    // function Person(name,age){
    //     this.name = name ;
    //     this.age = age ;
    // }
    // // creating - instance - from constructor
    // let p1 = new Person("adam",19) ;
    // let p2 = new Person("bob",23) ;

// using classes 
    class Person{
        constructor(name,age){
            this.name = name ;
            this.age = age ;
        }
        talk(){
            console.log(`Name : ${this.name}`) ;
            console.log(`Age : ${this.age}`) ;
        }
    }
    let p1 = new Person("adam",19) ;
    let p2 = new Person("bob",23) ;

    // inheritence

    class Student extends Person{
        constructor(name,age,marks){
            super(name,age) ;
            this.marks = marks ;
        }
        greet(){
            let greeting = `Hello ${this.name}` ;
            return greeting ;
        }
    }
    let s1 = new Student("Aaryan",21,89) ;

