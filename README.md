# Scope-and-lexical-environment
# what is scope in JavaScript
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
**Local scope:** functions declaration have local scope the variable declared inside the function are only accessible within the function, we can not access them outside of the function.\
Example:

function demo() {\
let a = 20;\  
}\
console.log(a);\
output: gives ReferenceError **Uncaught ReferenceError: a is not defined**\

**Block Scope:** Variables declared within the block {...} can not be accessed outside of it.

# scope in JS is dependent on Lexical environment
**Lexical environment:** Everytime JS engine creates an execution context to execute functions or global code, it also creates a new lexical environment to store the variable defined in that function during the execution of that function.\
\
there are 2 types of execution context
1. Global Execution Context- is created when JS program is run.
2. Local Execution Context- is created when function is invoked(call)\

why we need to understand execution context?\
because everything happens in JS inside the execution context. This execution context is created and pushed into callstack.


whenever local execution context is created also local memory is created, local execution context is created when function is invoked(call).\
wehenever this local execution context is created JS engine work is to push this execution context into memory and pop it off when the code inside of it's done.


**So what is lexical environment, lexical environment is local memory + it's lexical environment parent, local memory is created when function is invoked and lexical environment parent is whatever is in the global scope of it's local memory.**\
Whenever Execution context is created it has 2 phases memory creation phase + code execution phase. In memory creation phase memory is assigned to variables and functions in the case of variable memory is allocated undefinde and in the case of function memory is allocated to the copy of function code, In code execution phase value is assigned to the variables and functions.\
\
Everytime JS engine creates an execution context to execute functions or global code, it also creates a lexical environment to store the variable defined in that function during the execution of function.



