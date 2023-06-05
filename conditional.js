/*
conditional operator in js:
syntax:
condition ? ( body of truth) : (body of false)
*/

var age = 34
var bike = true
var money = 500000

age > 18
    ? money >= 500000
        ? bike == true
            ? console.log("moj gara")
            : console.log("bike kina vai")
        : console.log("collect")
    : console.log("you are child, you can't drive")