/*
conditional:
1. if
syntax:
condition:
truth value
falsy value: null, 0, undefined, false, "", NaN 
if(condition){
    // body of if
}
2. if else
syntax:
if(condition){
    // body of truth
}
else{
    // body of false
}


3. if elseif else
syntax:
if(condition1){
    // body of truth
}
else if(condition2){
    // body of truth
}
else if(condition3){
    // body of truth
}
.
.
.
else{
    // default block
}


4. switch

nep =23
eng=23

marks > 36
nep > 35 && eng >35
{
    per = (nep + eng)/100
    if(per>80)
}


*/
var a = 34;
if (a) {
    console.log("body of if statement")
}

if (a == 23) {
    console.log("body of truth")
}
else {
    console.log("body of false")
}
var age = 56
if (age < 8) {
    console.log("child")
}
else if (age > 8 && age < 18) {
    console.log("teenager")
}
else if (age > 18 && age < 35) {
    console.log("young")
}
else {
    console.log("old")
}

var nep = 79;
var eng = 80;
var math = 80;
var science = 12;

if (nep > 35 && eng > 35 && math > 35 && science > 35) {
    var per = ((nep + eng + math + science) / 400) * 100
    console.log(per)
    if (per >= 80) {
        console.log("dictinction")
    }
    else if(per <80 && per >=60) {
        console.log("first division")
    }
    else if(per < 60 && per >= 45) {
        console.log("second division")
    }
    else {
        console.log("third division")
    }
}
else {
    console.log("you fail")
}