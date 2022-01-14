//global scope
let a = 20;
function demo() {
    console.log(a);
}
demo();


// function scope(local scope) can't be accessed outside
function demo() {
    let a = 20;
}
console.log(a);
demo();
