
// function multiplicationnum(number){
//     let result = 1;
//     for( let i = number ; i >= 1; i--){
//         result = result * i;
//         console.log(i);
//     }
//     return result;
// }

// const number = 6;
// const fact = multiplicationnum(number)
// console.log(number, fact)


function multiplicationnum(number){
    let i = number;
    let result = 1;
    while(i >= 1){
        result = result * i;
        i--;
        console.log(i)
    }
    return result;
}
const number = 6;
const fact = multiplicationnum(number)
console.log(number, fact)


   