num = prompt("enter the number to check prime or not")
i = 0;
count = 0
while (i <= num) {
    if (num % i == 0) {
        count++
        // console.log(i)
    }
    // console.log(i)
    i++
}
if (count == 2) {
    console.log(num, "is a prime number")
}
else {
    console.log(num, "is not a prime number")
}