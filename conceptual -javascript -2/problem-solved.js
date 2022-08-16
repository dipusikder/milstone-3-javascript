// // _________---------_____________------_______________-----
// ******Write a program to find the total price of those product***  { Problem 1 }
// // _________---------_____________------_______________-----

// const x = { name: "laptop", color: "black", price: 14000 };
// const y = { name: "monitor", color: "grey", price: 5000 };
// const z = { name: "mobile", color: "black", price: 2500 };

// const result = x.price + y.price + z.price;
// console.log(result)
// console.log(x.price + y.price + z.price);






// // _________---------_____________------_______________-----  { Problem 2}
// ******Write a function that will take a radius of a circle and will retrun the area of circle***
// ****একটি ফাংশন লিখুন যা একটি বৃত্তের ব্যাসার্ধ নেবে এবং বৃত্তের ক্ষেত্রফল দেবে****

// // _________---------_____________------_______________-----

// function areaOfcircule(r){
//     const pi = 3.1416;
//     const area = pi* r* r;
//     return area.toFixed(2);

// }
// const area = areaOfcircule(5)
// console.log(area)
// console.log(areaOfcircule(5));
// console.log(areaOfcircule(7));


// ***বৃত্তের ক্ষেত্রফল নির্ণয়ের সূত্রটি হল πr² যেখানে r হচ্ছে বৃত্তের ব্যাসার্ধ এবং π হচ্ছে একটি ধ্রুবক বা constant যার মান 3.1416 প্রায়। একটি বৃত্তের ব্যাস বা ব্যাসার্ধ জানলে আমরা খুব সহজে সেই বৃত্তটির ক্ষেত্রফল নির্ণয় করতে পারব।****





// // _________---------_____________------_______________-----
// ******Write a funtion that will take as feet as the input parameter and will conver  it into inch and will retrun the result into inch***  { Problem 3 }
// // _________---------_____________------_______________-----

// function FeetToInch(feet){
//     const convert = feet * 12;
//     return convert;
// }
// const inchvalue = FeetToInch(1)
// console.log(feetvalue)
// const inchvalue1 = FeetToInch(3)
// console.log(feetvalue1)
// const inchvalue2 = FeetToInch(1.5)
// console.log(feetvalue2)

// ****** একটি ফাংশন লিখুন যা ইনপুট প্যারামিটার হিসাবে ফুট হিসাবে নেবে এবং এটিকে ইঞ্চিতে রূপান্তর করবে এবং ফলাফলটি ইঞ্চিতে ফিরিয়ে দেবে






// // _________---------_____________------_______________-----
// ******Write a funtion that will take as inch as the input parameter and will conver  it into feet and will retrun the result into feet***  { Problem 4 }
// // _________---------_____________------_______________-----

// function inchToFeet(inch){
//     const convert = inch / 12;
//     return convert;
// }
// const feetvalue = inchToFeet(84)
// console.log(feetvalue)

// ******একটি ফাংশন লিখুন যা ইনপুট প্যারামিটারের মতো ইঞ্চি নেবে এবং এটি ফুটে রূপান্তর করবে এবং ফলাফলটি ফুটে ফিরিয়ে দেবে**




// // _________---------_____________------_______________-----
// ******Write a funtion that will take input the total price of the products you bought and retrun the net price calculate according discount  table below***  { Problem 5 }
// // _________---------_____________------_______________-----


function getDiscount(totalprice) {
    if( totalprice > 5000){
        const discount = totalprice *(30/100);  
        const netPrice = totalprice - discount;
        console.log(netPrice)
    }
    else if( totalprice >= 3000){
        const discount = totalprice *(20/100); 
        const netPrice = totalprice - discount;
        console.log(netPrice)
    }
    else if( totalprice >= 1000){
        const discount = totalprice *(10/100); 
        const netPrice = totalprice - discount;
        console.log(netPrice)
    }
    else{
        console.log("no discount for you")   
    }
}
// // **********-----------********
// // Attention ekhne boro theke soto gele sob gula use kora jabe
// // **********-----------********
getDiscount(6000);
getDiscount(1000);
getDiscount(3000);
getDiscount(500);

// // _________---------_____________------_______________-----
// ******একটি ফাংশন লিখুন যা আপনার কেনা পণ্যের মোট মূল্য ইনপুট নেবে এবং নীচের ডিসকাউন্ট টেবিল অনুসারে নেট মূল্য গণনা করবে***  { Problem 5 }
// // _________---------_____________------_______________-----



// // _________---------_____________------_______________-----
// ******Write funtion that will take a year as a input parmeter and will check that its leap year or not***  { Problem 6 }
// // _________---------_____________------_______________-----

// function isLeap(year) {
//     if (year % 4 === 0) {
//         if (year % 100 === 0) {
//             if (year % 400 == 0) {
//                 return ("Leap year.");
//             } else {
//                 return ("Not leap year.");
//             }
//         } else {
//             return ("Leap year.");
//         }
//     } else {
//         return ("Not leap year.");
//     }
// }
// const leapyear = isLeap(2024)
// console.log(leapyear)
// const leapyear1 = isLeap(2022)
// console.log(leapyear1)
// const leapyear2 = isLeap(2018)
// console.log(leapyear2)


// // _________---------_____________------_______________-----
// ******একটি ইনপুট প্যারামিটার হিসাবে এক বছর সময় নেবে এমন ফাংশন লিখুন এবং এটির লিপ ইয়ার কিনা তা পরীক্ষা করবে   { Problem 5 }
// // _________---------_____________------_______________-----




// // _________---------_____________------_______________-----
// ******Write funtion that will take a year as a input parmeter and will check that its leap year or not***  *******With && and || or*** { Problem 6 } 
// // _________---------_____________------_______________-----
// function isLeap(year){
//     if((year % 4 == 0) && (year % 100 != 0)|| (year % 400 == 0)){
//         console.log("Leap Year");
//     }
//     else{
//         console.log("Not Leap Year");
//     }
// }
// isLeap(2024)
// isLeap(2022)
// isLeap(2018)



// // _________---------_____________------_______________-----
// ******একটি ইনপুট প্যারামিটার হিসাবে এক বছর সময় নেবে এমন ফাংশন লিখুন এবং এটির লিপ ইয়ার কিনা তা পরীক্ষা করবে   { Problem 5 }
// // _________---------_____________------_______________-----


// // _________---------_____________------_______________-----
// ******Write a function that will take a intiger as a input and will retrun the factorial number for this input *** (using while loop and for loop)  { Problem 7 } 
// // _________---------_____________------_______________-----

// function fact(n){

//     let result = 1;   // (** ekhne 0 dile hbe na karon 0 dile jkono kicur sthae gun korle value 0 thakbe**)
//     let i = n;
//     while(i>= 1){
//         result = result * i;
//         i--;
//     }
//     return result;

// }
// console.log(fact(5))




// // _________---------_____________------_______________-----
// ******একটি ফাংশন লিখুন যা একটি ইনপুট হিসাবে একটি পূর্ণসংখ্যা গ্রহণ করবে এবং এই ইনপুটের জন্য ফ্যাক্টরিয়াল নম্বর প্রদান করবে ***(using while loop and for loop)  { Problem 7 } 

// // _________---------_____________------_______________-----

// // _________---------_____________------_______________-----
// ******Write a function that will take a arrey and will retrun odd sum and evensum***   { Problem 8 } 
// // _________---------_____________------_______________-----

// function oddevensum(arr){
//     // [1,2,3,4,5,6,7]
//     for(let i = 0; i <= arr.length; i++ )
//     console.log(arr[i])  ***** Ai Porjonto index ber korlam****
// }
// const arr = [ 44, 56, 77, 88, 33, 55,];
// console.log(arr)

// function oddsumeven(arr){
//     let evensum = 0;
//     let oddsum = 0;
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] % 2 == 0){
//             evensum = evensum + arr[i];
//         }
//         else{
//             oddsum = oddsum + arr[i];
//         }
//     }
//     // console.log("Even sum",evensum, "Oddsum",oddsum);
//     return{ evensum, oddsum}   // **** How to decleare multiple result in retrun using 2nd brkaet***
// }

// const arr = [ 44, 56, 77, 88, 33, 55,];
// console.log(oddsumeven(arr))

// // _________---------_____________------_______________-----
// ******একটি ফাংশন লিখুন যা একটি ক্যারি নেবে এবং বিজোড় যোগফল এবং জোড় যোগফল প্রদান করবে***   { Problem 8 }
// // _________---------_____________------_______________-----

// Write a function that will take a number and will check the number is positive or negative.
// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Write a function named findArea() that will take base and height of a triangle and will return the area of triangle.
// Write a function named findArea() that will take height and width of a rectangle and will return the area of rectangle.
// Write a function which will take an integer and will return the square of a number.
// Write a function that will taka an array and calculate the sum of odd numbers greater than 10 and less than 50.
