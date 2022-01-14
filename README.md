# Scope-and-lexical-environment
# what is scope in JavaScript\
Scope is the accessibility of variables,functions and objects in some particular part of code during run time means we can say that where we can access
our variables and functions in code.\
**types of scope**\
Global Scope\
Local Scope\
Block Scope\
**Global Scope:** When we start writting JS code we are already in Global scope, the variables inside in the global scope are accessible anywhere in the code.
Example:\
// this variable is in global scope\
let a = 20;\
function demo() {\
    console.log(a);\
}\
demo();\
output:20\
**Local scope:** functions declaration have local scope the variable declared inside the function are only accessible within the function, we can not access them outside of the function.
Example:\

function demo() {\
let a = 20;\  
}\
console.log(a);\
output: gives ReferenceError **Uncaught ReferenceError: a is not defined**
so let's understand scope.\
Scope in JaVascript directly related to lexical environment.
**Block Scope:** Variables declared within the block {...} can not be accessed outside of it.


