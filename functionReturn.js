/*
function with return type:

syntax:

function function_name(){
    // functional block
    return
}
*/
function add() {
    var a = 13;
    var b = 24;
    var detail = {
        email: 'ram@gmail.com',
        from: 'vedu',
        to: 'ram',
        replyTo: 'shyam',
        subject: 'welcome',
        message: 'hi',
        topic: 'something'
    }
    var fruits = ['apple', 'kiwi', 'mango', 'banana']
    var sum;
    sum = a + b
    // console.log(sum)
    // return detail;
    // console.log("below the return")
    // return sum;
    // ecma script es5 es6
    return {
        // object shorthand property
        detail,
        sums: sum,
        fruits: fruits
    }
}
// add()
var sum = add()
console.log('what comes in', sum.sums)
// console.log('the sum of two number is: ', sum)
console.log(sum.fruits[3])