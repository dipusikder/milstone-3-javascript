// function sum(i) {
//     if(i == 1){
//         return 1
//     }
//     console.log(i)
//     return i + sum(i-1)
// }
// const result = sum(5)
// console.log(result)

// 5+ Sum(5-1)
//  5 + 4 sum (4-1)
// 5 + 4 + 3 sum (3 -1)
//  5 + 4 + 3 + 2 ( 2-1 re)
//  5 + 4 + 3 + 2 + 1 = 15


function sum(i) {
    if( i==1){
        return 1;
    }
    return i + sum(i-1); 
}

const result = sum(5)
console.log(result)