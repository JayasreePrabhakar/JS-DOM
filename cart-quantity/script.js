//console.log("Hello");

let cartQuantity = Number(localStorage.getItem("cartQuantity"));

if(!cartQuantity) {
    localStorage.setItem("cartQuantity", 0);
    cartQuantity = 0;
}
// default operator
//cartQuantity = cartQuantity || 0;//problem

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