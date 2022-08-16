// // // // // _________---------_____________------_______________-----
// // // ** how can we declere a max number math.max with if else and no retrun        problem 1
// // // // // _________---------_____________------_______________-----  



// function largestNumber( num1, num2, num3){
//     if(num1 > num2 && num1 >num3){
//         console.log("biggest Number Is", num1);
//     }
//     else if(num2 > num1 && num2 >num3){
//         console.log("biggest Number Is", num2);
//     }
//     else{
//         console.log("biggest Number Is", num3);
//     }
// }
// largestNumber ( 5, 4, 3);
// largestNumber (5, 7, 4);
// largestNumber (5, 7, 8);

// // // // // _________---------_____________------_______________-----
// // // ** how can we declere a max number math.max with if else with retrun        problem 2
// // // // // _________---------_____________------_______________-----  


// function maxOfArray(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
//   }
  
//   let value = maxOfArray(55, 44, 66);
//   console.log(value)

// // // // // _________---------_____________------_______________-----
// // // ** how can we say that who is the tallest with funtion arrey  and 2nd hights     problem 3
// // // // // _________---------_____________------_______________-----  

function maxArrey (numbers){
    let sum = 0;
for(let i =0; i< numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum + element
    console.log(element)
}
return sum
} 

const hights = [167, 190, 120, 165, 137]
const tallest = maxArrey(hights);
console.log("tallest Peron", tallest)