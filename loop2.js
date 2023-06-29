// const { forEach } = require("async")

var fruits = ['apple', 'mango', 'banana', 'apple', 'mango', 'banana']
function uniqueitem(args) {
    var unique = []
    args.forEach(function (item, index) {
        if (unique.indexOf(item) == -1) {
            unique.push(item)
        }
    })
    return unique

}
var res = uniqueitem(fruits)
console.log(res)


var details = [
    {
        name: 'ram',
        add: 'lalitpur',
        email: 'nirjalkarki16@gmail.com',
        class: 12
    },
    {
        name: 'nirjal',
        add: 'lalitpur',
        email: 'nirjalkarki16@gmail.com',
        class: 11
    },
    {
        name: 'sushant',
        add: 'lalitpur',
        email: 'nirjalkarki16@gmail.com',
        class: 4
    },
    {
        name: 'yo mula',
        add: 'lalitpur',
        email: 'nirjalkarki16@gmail.com',
        class: 5
    },
    {
        name: 'hahah',
        add: 'lalitpur',
        email: 'nirjalkarki16@gmail.com',
        class: 6
    },
    {
        name: 'ohno',
        add: 'lalitpur',
        email: 'nirjalkarki16@gmail.com',
        class: 7
    },
    {
        name: 'shyam',
        add: 'kathmandu',
        email: 'nirjalkarki16@gmail.com',
        class: 8
    },
    {
        name: 'hehehe',
        add: 'bhaktapur',
        email: 'nirjalkarki16@gmail.com',
        class: 9
    },

]
details.forEach(function(item, index){
        item.status = 'status online'
    
})
console.log(details)

var add = []
details.filter(function(item, index){
    console.log(item)
    console.log(index)
    if (item.add == 'lalitpur'){
        add.push(item)
        // console.log(item)
    }
})
// var name = details.map(function(item, index){
//     return item.name
// })
// console.log(name)

// var email = details.map(function(item, index){
//     return item.email
// })
// console.log(email)

// var name = details.some(function(item, index){
//     if (item.name == 'ram'){
//         return item
//     }
// })
// console.log(name)
// var name = details.every(function(item, index){
//     if (item.name == 'ram'){
//         return item
//     }
// })
// console.log(name)

// var name = details.find(function(item, index){
//     if (item.name == 'ram'){
//         return item
//     }
// })
// console.log(name)

details.reduce(function(acc, item, index ,source){
console.log(acc)
console.log(source)
console.log(index)
console.log(item)
})