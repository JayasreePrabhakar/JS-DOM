//clousers

function outer() {
    let count = 5;//Even zero is not initialized the value is taken as zero in the count
    return function inner() {
        count++;
        console.log(`count: ${count}`);
    };
}

const counter = outer();
counter();
counter();