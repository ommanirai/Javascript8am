function first_num(num1){
    function second_num(num2){
        var mul = num1 * num2
        return mul
    }
    return second_num
}
var result = first_num(12)(11)
console.log(result)
