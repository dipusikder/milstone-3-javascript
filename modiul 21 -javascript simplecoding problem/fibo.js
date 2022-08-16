


// // // // // _________---------_____________------_______________-----
// // // ** how can we declere a fibo math        problem 1
// // // // // _________---------_____________------_______________-----  
// let fibo =   0,     1,     1,     2,     3,
    //       5,     8,    13,    21,    34,
    //      55,    89,   144,]

// fibo [3] = fibo[2] + fibo[1] = 1
// fibo [4] = fibo[3] + fibo[2] = 2
// fibo [5] = fibo[4] + fibo[3] = 3
// fibo [6] = fibo[5] + fibo[4] = 5
// fibo [7] = fibo[6] + fibo[5] = 8
// fibo [8] = fibo[7] + fibo[6] = 13



//     

// function fibonacciSeries(number) {
//     let fibo = [0, 1]
//     for (var i = 2; i <= number; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }
// console.log(fibonacciSeries(0))
// // //Output:  [
// //       0,     1,     1,     2,     3,
// //       5,     8,    13,    21,    34,
// //      55,    89,   144,   233,   377,
// //     610,   987,  1597,  2584,  4181,
// //    6765, 10946, 17711, 28657, 46368,
// //   75025
// // ]