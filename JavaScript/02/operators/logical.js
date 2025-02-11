// logical and
console.log(3>1 && 6>5) ; // true && true == true
console.log(3>1 && 6<5) ; // true && false == false
console.log(3<1 && 6>5) ; // false && true == false
console.log(3<1 && 6<5) ; // false && false == false

// logical or
console.log(3>1 || 6>5) ; // true && true == true
console.log(3>1 || 6<5) ; // true && false == true
console.log(3<1 || 6>5) ; // false && true == true
console.log(3<1 || 6<5) ; // false && false == false

// logical not
console.log(!true); // false
console.log(!0);    // 1