var name = 100

// console.log(typeof(name))

// type conversion(coercion)
/*
1. implicit coercion(PL)
2. explicit coercion(developer)
*/

var number = '12'
var a = 12
console.log(typeof (number))
console.log(typeof (Number(number)))

function sum(a, b) {
    var sum = a * b;
    return sum;
}
// explicit coercion
var res = sum('12', 10)
console.log(res)

var email = 'ram@gmail.com'

console.log(email.includes('@') && email.includes(".com"))

var skills = 'programming, cycling, reading, singing'

console.log(skills.split('g'))

