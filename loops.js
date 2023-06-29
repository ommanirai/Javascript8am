// var fruits = ['mango', 'orange', 'apple', 'kiwi']
// fruits.forEach(function (item, index) {
//     console.log(item)
//     console.log(index)
// })

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var sum = 0
num.forEach(function (item, index) {
    sum = sum + item
})
console.log(sum)
var unique = []
var fruits = ['mango', 'orange', 'apple', 'kiwi', 'banana', 'mango', 'orange', 'apple', 'kiwi', 'banana']
fruits.forEach(function (item, index) {
    if (unique.indexOf(item) == -1)
    return unique
        unique.push(item)
})
console.log(unique)


