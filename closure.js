/*
closure:
closure is an inner function which has access to
1. global scope
2. parent function scope
3. parent function argument(parameter)
4. own scope and argument
*/
var greetingText = 'good morning'
function welcome(msg) {
    var name = 'ram'
    function hi(address) {
        // hi is closure
        var text = greetingText + " " + name + ' from ' + address + " " + msg
        // console.log(text)
        return text
    }
    return hi
}
var res = welcome("vedu aau")("lalitpur")
var result = welcome("yeta aau")("nirjal")
console.log(res)
console.log(result)
// var result = welcome("kumaripati aau")
// console.log("what comes in: ", res('lalitpur'))
// console.log("what comes in: ", result('kathmandu'))

// 12, 10
var multiplication = mul(12)(10)
console.log(multiplication)