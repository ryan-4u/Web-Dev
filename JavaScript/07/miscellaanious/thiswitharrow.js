const student = {
    name: "aarya" ,
    marks : 67 ,
    prop : this , // scope -> global
    // this with function -> scope = calling object = 'student' for now
    getName : function () {
        console.log(this) ; // scope = student
        return this.name ;
    },
    // this with arrow function -> scope = scope of calling object = global scope
    getMarks : () => {
        console.log(this) ; // scope = global
        return this.marks ; // when we try to access this 
                            // console returns undefined 
                            // duw to scope difference 
                            // this is one of disADV                        
    },
    // but there are adv too..
    //like when we need to use window functions => 
    // # this with arrow function
    // # adv - we can access the right "this" => student (here) 
    getInfo1 : function ()  {
        setTimeout( () => { // scope = parent's scope = scope of function(in upper line) as its nested = student
            console.log(this); // o/p = student
        },2000);
    } ,
    // # this with normal function
    getInfo2 : function ()  {
        setTimeout( function () { // scope = who called = set timeout = which is of window object
            console.log(this); // o/p = window
        },2000);
    }
} ;