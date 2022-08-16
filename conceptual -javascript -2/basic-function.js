// ******* To Work Function we need to do 2 Things********
// 1 Write Function keyword 
// 2 Call that Function


// ******* How to decleare Function******
// // // 1.function nameOffunction(){
//     Block Of Code
// // }



// **********How To Delcleare a Call*****
// nameOffunction();



// **********How To work a function*****
// // // 1.function nameOffunction(){
//     consol.log("hello Evreyone")
// // }
// nameOffunction()




// ******Where is parameter and argument in Function****

// // // 1.function nameOffunction(Perameter){
//     consol.log("hello Evreyone")
// // }
// nameOffunction(argument)




// ***** Peramter is like var its used for a value nam*****
// // // 1.function nameOffunction(valuename){
//     consol.log("hello Evreyone",, valuename)
// // }
// nameOffunction(valuename)




// **how to decleare and call a Function***
// function nameOffunction(name){
//     //     consol.log("hello Evreyone", name)
//     // // }
//       nameOffunction(ananta zalil)
       // out put is "hello Evreyone" , ananta zalil


// ----------------------------------
// **********add two number function and argument********
// -----------------------------------

function sum(num1, num2){
    let convert = num1 + num2;
    console.log(convert)
}
sum(3, 5);

// ----------------------------------
// **********add two number function with Retrun********
// -----------------------------------

function sum(num1, num2){
    let convert = num1 + num2;
    return convert;
}
console.log(sum(3, 5))

// ----------------------------------
// **********how can we add some numbers in outside of function body********
// -----------------------------------
function sum(num1, num2){
    let convert = num1 + num2;
    return convert;
}
let addnumber = sum(4, 5) + 34;
console.log(addnumber);
// ----------------------------------
// **********What is the benifit was use a function ********
// ans : we can use multiple consol log use for in one time declare of any funtion name
// -----------------------------------