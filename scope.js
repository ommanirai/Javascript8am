// /*
// application data: variable, constant, function
// scope:
// -> scope is accessibility of application data

// types of scope:
// 1. global scope
// 2. functional scope / local scope
// 3. block scope
// */
// var name = 'ram'
// const pi = 3.14
// function welcome() {
//     console.log("welcome")
//     console.log(name)
// }
// welcome()
// // if(msg){
// //     asdfasf
// // }

// // global scope
// // outermost layer
// // accessible throughout the file


// // functional scope
// // scope within the function
// var greetingText = "Namaster"

// function hi(msg){
//     greetingText = 'welcome'
//     console.log(msg+' ram welcome to vedu')
//     console.log(greetingText)
//     // function hello(){

//     // }
//     // hello()
// }
// hi("hi")

// // console.log(msg+' ram welcome to vedu')
// console.log(greetingText)
// "use strict";
// a  = 'ram'
// console.log(a)

// block scope
/*
{


}
if(){

}
function welcome(){

}
*/

var msg = 'hi'
var text = 'vedu global institute'
if (msg) {
    let text = msg + " from vedu"
    console.log(text)
}
else {
    let text = 'namaste from vedu'
    console.log(text)
}
console.log("text is: ", text)


if(12){
    let n = 23;
    console.log(n)
}
console.log(n)
