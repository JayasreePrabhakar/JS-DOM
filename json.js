//const jsObject = {
    //name: "Jayasree",
    //age: 19,
    //display: function () {
        //console.log("Hello");
    //},
//};

//Javascript Ibject Notation
//let jsonObject = {
  //  "name": "Jayasree",//name to written in " " not in ' '
    //"age": 19,
//};
//No function support
//methods(function inside objects) are not supported

//mostly used (JSON) in string
//JSON Methods
//let stringJSON = JSON.stringify(jsObject);
//console.log(stringJSON);
//console.log(typeof stringJSON);

//let normalJSON = JSON.parse(stringJSON);
//console.log(normalJSON);
//console.log(typeof normalJSON);

//localStorage
localStorage.setItem("username", "Jayasree");
let item = localStorage.getItem("username");
console.log(item);

localStorage.removeItem("username");
let item2 = localStorage.getItem("username");
console.log(item2);

//sessionStroage
sessionStorage.setItem("username","Jayasree");

