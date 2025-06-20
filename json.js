const jsObject = {
    name: "Jayasree",
    age: 19,
    display: function () {
        console.log("Hello");
    },
};

//Javascript Ibject Notation
let jsonObject = {
    "name": "Jayasree",//name to written in " " not in ' '
    "age": 19,
};
//No function support
//methods(function inside objects) are not supported

//mostly used (JSON) in string
//JSON Methods
let stringJSON = JSON.stringify(jsObject);
console.log(stringJSON);
console.log(typeof stringJSON);

let normalJSON = JSON.parse(stringJSON);
console.log(normalJSON);
console.log(typeof normalJSON);