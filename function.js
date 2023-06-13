/*
function:
-> reusuable block of code which perform specific task

syntax:

function function_name(){
    // block of function
}

javascript way of writing a function
1. expression syntax
2. declaration syntax


types of function in javascript
1. named function
2. function with argument
3. function with return value
4. IIFE(immediately invoked functional expression)
5. anynamous function(unnamed function)
*/

function add() {
    var a = 13;
    var b = 24;
    var sum;
    sum = a + b
    console.log(sum)
}
function diff() {
    var a = 13;
    var b = 24;
    var diff;
    diff = a - b
    console.log(diff)
}

function division() {
    var a = 13;
    var b = 24;
    var div;
    div = a + b
    console.log(div)
}

function multiplication() {
    var a = 13;
    var b = 24;
    var mul;
    mul = a + b
    console.log(mul)
}
// add()
// add()
// add()
// add()
// add()
// var sum = add()
// console.log(add())
// add()
// diff()
// division()
// multiplication()

choice = 1
switch(choice){
    case 1:
        add()
        break;
    case 2:
        diff();
        break;
    case 3:
        division()
        break;
    case 4:
        multiplication()
        break;
    default:
        // console.log('invalid choice')

}