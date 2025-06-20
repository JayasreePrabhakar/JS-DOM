//let newObject = {
  //  name: "Jayasree",
    //display: function() {
      //  console.log("Hello");
    //}
//}

//newObject.display();

//console Object Methods
//console.log("Jello Jayasree");
//console.warn("This is a warning");
//console.error("Something went wrong");

//console.table([{name : "Alice" }, { name: "Bob" }]);

//console.time("loop");
//for (let i =0; i< 1000000; i++) { }
//console.timeEnd("loop");

//eval() function - don't use in live projects
//const x = 10;
//const y = 20;
//const result = eval("x + y");
//console.log(result);

//strict mode - to rectify the error
//"use strict";
//let a = 10;
//b = 20;


// ? : --> Ternary operators
//condition ? statement1 : statement2
let checkGreatervalue = (1 > 2) ? 1 : 2;
console.log(checkGreatervalue);

//&& - guard operator
let a = (1 > 2) && 5;
console.log(a);

//if (condition) {
  //if_logic
//}

// || - default operator
let input;
let b = input || 4;// if any value is not stored it take the value 4
console.log(b);

//falsy values
// 0  ' '  NaN undefined null