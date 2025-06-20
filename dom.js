const para = document.getElementById("msg");//index.html
console.log(para.innerText);

para.innerText = "This is set via JavaScript";

//const hiButton = document.querySelector("#js-button");
const hiButton = document.querySelector(".js-button");

//Event listeners
hiButton.addEventListener("click", () => {
    console.log("Hi");
});