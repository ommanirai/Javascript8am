/*
synchronous:

step 1
step 2 :it waits result of step 1
step 3 : it waits the result of step 2
step 4: it waits the result of step 3

step n: it waits the result of step n-1

*/
console.log('1')
console.log('2')
// callback
// method: setTimeout, setInterval
setTimeout(function () {
    console.log("set time out method")
}, 5000)

setInterval(function(){
    console.log("something")
}, 1000)
console.log('3')
console.log('4')
console.log('5')

//something
// 1,2,3,4,5
// 3