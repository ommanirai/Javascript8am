/*
loops:
1. for loop
2. while loop
3. do-while loop


1. for loop
syntax:
for(initialization; condition; increment/decrement)
*/
// factorial of the number
5 = 5 * 4 * 3 * 2 * 1

// sum of natural number
sum = 0
n = prompt("enter the number")
for (i = 1; i <= n; i++) {
    // console.log(i)
    // if (i % 2 == 0) {
    //     console.log(i)
    // }
    sum += i;
    // i=1
    // sum = sum + i
    // sum = 1 + 2 // 1
}
console.log(sum)