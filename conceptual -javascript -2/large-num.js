// _------------------------------------------_
// **** Write a function Which will take 3 intigers and retrun the largest number.Which****
// ****** you need to do it in tow ways (Has-Retrun) , (No-Retrun)***
// _------------------------------------------_





// ________________________----------------__________----------
// // Write a function Which will take 3 intigers (No-Retrun)***
// ________________________----------------__________----------

function largestNumber( num1, num2, num3){
    if(num1 > num2 && num1 >num3){
        console.log("biggest Number Is", num1);
    }
    else if(num2 > num1 && num2 >num3){
        console.log("biggest Number Is", num2);
    }
    else{
        console.log("biggest Number Is", num3);
    }
}
largestNumber ( 5, 4, 3);
largestNumber (5, 7, 4);
largestNumber (5, 7, 8);
// ________________________----------------__________----------
// // Write a function Which will take 3 intigers (Has-Retrun)***
// ________________________----------------__________---------

function largestNumberNew( num1, num2, num3){
    if(num1 > num2 && num1 >num3){
        return(num1);
    }
    else if(num2 > num1 && num2 >num3){
        return(num2);
    }
    else{
        return(num3);
    }
}
// let result = largestNumberNew(5, 4, 3)
// console.log("largest number is",result)
// let result1 = largestNumberNew(5, 6, 3)
// console.log("largest number is",result1)
// let result2 = largestNumberNew(5, 4, 8)
// console.log("largest number is",result2)

console.log(largestNumberNew( "biggest Number Is",5, 4, 3))
console.log(largestNumberNew( "biggest Number Is",5, 6, 3))
console.log(largestNumberNew( "biggest Number Is",5, 4, 8))
