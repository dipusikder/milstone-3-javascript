// _____________--------------________________________------------
// *****Print all that number which divided by 3
// _________----------___________----------------____________---


// function isEven() {
//     for( let i = 1; i <= 20; i++){
//         if(i % 3 == 0){
//             console.log(i)
//         }
//     }
// }
// isEven()


// _____________--------------________________________------------
// *****count all that number which divided by 3 with no retrun
// _________----------___________----------------____________---

// function isEven() {
// let count = 0;
//     for( let i = 1; i <= 20; i++){
        
//         if(i % 3 == 0){
//            count = count + 1
//         }
//        console.log(count)
//     }
// }
// isEven()



// _____________--------------________________________------------
// *****count all that number which divided by 3 with retrun
// _________----------___________----------------____________---

// function isEven() {
// let count = 0;
//     for( let i = 1; i <= 20; i++){
        
//         if(i % 3 == 0){
//            count = count + 1
//         }
      
//     }
//     return count
// }
// console.log(isEven())



// _____________--------------________________________------------
// *****count all that number avg which divided by 3 and 1- n (n input)
// _________----------___________----------------____________---

// function isEven(n) {
// let count = 0 , sum = 0;;
//     for( let i = 1; i <=n; i++){
        
//         if(i % 3 == 0){
//             count = count + 1
//             sum = sum + i
           
//         }
      
//     }
//     const avg = sum / count;
//     return avg
// }
// let number = 30;
// console.log(isEven(number))

// _____________--------------________________________------------
// *****count electricity bill with different unit (100 = 5 ), (101 == 200 = 6 ) (201== 250 = 7) 
// _________----------___________----------------____________---


function electrcityBill(unit) {
    let bill;
    if( unit <= 100){
        // bill = 100
        bill = unit * 5
    }
    else if( unit <= 200){
        // bill = 130
        const first100 = 100 * 5; 
        // first 130 - 100 = 30
        const remainig = unit - 100;
        // remainig = 30 
        const remainigCost = remainig * 6;
        // 30 * 6 = 180
        bill = first100 + remainigCost;  // 500 + 180 = 680
    }
    else if(unit > 200){
        // bill = 230
        const first100 = 100 * 5;
      // first 230 - 100 = 130
        const second100 = 100 * 6;
        // seocend 130 - 100 = 30
        const remainig = unit - 200;
        // remainig = 30 
        const remainigCost = remainig * 7
        // 30 * 6 = 180
        bill = first100 + second100 + remainigCost // 500 + 600 + 210 = 1310
    }
}
return bill;



