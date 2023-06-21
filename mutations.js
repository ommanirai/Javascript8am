/*
mutation
1. mutable behaviour
-> if chage in original it is reflected in reference
-> if change in reference it is refleced in original
-> non primitive data type shows mutable behaviour

2. immutable behaviour
-> if chage in original it is not reflected in reference
-> if change in reference it is not refleced in original
-> primitive data type shows immutable behaviours
*/

var num1 = 10 // original
var num2 = num1 // reference
num1 = 100

// console.log(num1)
// console.log(num2)

var detail = { // original
    name: 'ram',
    phone: 9812121212,
    address: 'vedu',
}
var detail1 = detail // reference
// detail.status = "online"
detail1.status = "active"
// console.log(detail)
// console.log(detail1)

var emailData = {
    from: 'vedu',
    to: 'ram@gmal.com',
    subject: 'hi'
}

function sendMail(data){
    // console.log("what comes in: ", data)
    data.msg = "welcome"
    // data = 'shyam'
}
// var str = "ram"
sendMail(emailData)
// sendMail(str)
console.log(emailData)
// console.log(str)