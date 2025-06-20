//console.log("Hello");

let cartQuantity = Number(localStorage.getItem("cartQuantity"));

if(!cartQuantity) {
    localStorage.setItem("cartQuantity", 0);
    cartQuantity = 0;
}
// default operator
//cartQuantity = cartQuantity || 0;//problem

const displayButton = document.getElementById("Display-Button");
const plusOneButton = document.getElementById("plus-1");
const plusTwoButton = document.getElementById("plus-2");
const plusThreeButton = document.getElementById("plus-3");
const resetButton = document.getElementById("reset-button");

displayButton.addEventListener("click", () => {
    displayQuantity();
});
plusOneButton.addEventListener("click", () => {
    updateQuantity(1);
    displayQuantity();
});
plusTwoButton.addEventListener("click", () => {
    updateQuantity(2);
    displayQuantity();
});
plusThreeButton.addEventListener("click", () => {
    updateQuantity(3);
    displayQuantity();
});
resetButton.addEventListener("click", () => {
    resetCart();
    displayQuantity();
});

function updateQuantity(value) {
    cartQuantity = cartQuantity + value;
    localStorage.setItem("cartQuantity", cartQuantity);
}

function displayQuantity() {
    console.log(`Cart: ${cartQuantity}`);
}

function resetCart() {
    cartQuantity = 0;
    localStorage.setItem("cartQuantity", cartQuantity);
    console.log("The cart has been reset");
}