/*
anynamous / unnamed function

syntax:

function(){

}
*/

// IIFE(immidiately invoked functional expression)
// syntax:
// ()()


function welcome() {
    console.log("welcome")
}

// (welcome)()
(function () {
    console.log("i am anynamous function")
    console.log(" i am taking help of IIFE to get executed")
})()
