/*

switch:
syntax:
switch(case){
    case case1:
        //body of case 1
        break;
    case case2:
        //body of case 2
        break;
    case case3:
        //body of case 3
    case casen:
        //body of case n
        break;
    default:
        // body of default
}
*/
function sum(){
    sum = a + b;
    console.log(sum)
}

var day = 9;
switch (day) {
    case 1:
        // console.log("sunday")
        sum()
        break;
    case 2:
        console.log('monday')
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log('wednesday')
        break;
    case 5:
        console.log("thursday")
        break;
    case 6:
        console.log('friday')
        break;
    case 7:
        console.log("saturday")
        break;
    default:
        console.log("invalid input")
}
var a = prompt("enter the number")
console.log(typeof (a))
num1 = Number(a)
console.log(typeof (num1))
var b = prompt("enter second number")
num2 = Number(b)
sum = num1 + num2
symbol = "+"

// square = num1 ** 2 or Math.pow(num1, 3)

num1 ** 3
num1 * num1 * num1
square = Math.sqrt(num1)

// case '+'
// case '-'
// case '/'
// case '*'