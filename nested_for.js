// for (i = 5; i >= 1; i--) {
//     for (j = 5; i >= 1; j--) {
//         // document.write(j)
//         console.log(j)
//     }
//     // document.write("<br>")
// }

for (i = 5; i >= 1; i--) {
    for (j = 5; j >= i; j--) {
        document.write(j)
        // console.log(j)
    }
    document.write("<br>")
}