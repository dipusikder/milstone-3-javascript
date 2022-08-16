// Problem:1 radianToDegree
// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
// function radianToDegree(degrees){
// const doubleconvert = degrees * 180 / Math.PI;
// if(typeof degrees !== 'number'){
// return "Please provide a valid Number";
// }
// return parseFloat(doubleconvert.toFixed(2));
// }
// 




// Problem:2 isJavaScriptFile
// ফাংশন নেম দিতে হবে isJavaScriptFile । এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে ।
// function isJavaScriptFile(lastName) {
// if(typeof lastName !== 'string'){
// return "please provide a valid string";
// }
// return lastName.endsWith("js");
// }


// Problem 3: oilPrice
// ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।
// ভিডিও ভালো করে দেখবে।
// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা

// function oilPrice(num1, num2, num3){
// let add = num1 + num2 + num3;
// let factorial = 30 * num1 + 20 * num2 + 10* num3;
// let twoNeed = num1 + 0 * num2 + 2 *num3 ;
// let lastTwo = 0 * num1 + 2 * num2 + 3* num3;
// if(typeof num1!== 'number'&& num2 !== 'number'&& num3 !=='number' ){
// return "please provide all valid number";
// }
// return {add, factorial, twoNeed, lastTwo };
// }





// Problem 4: publicBusFare
// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে ) নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।


function publicBusFare(People) {
if(People){
let bigCar = People % Bus;
let publicBus = bigCar % microbus;
let local = publicBus * ticiktprice
if(typeof People !== 'number' ){
return "please provide a valid number";
}
return local ;
}
else if(People < 50){
    let bigcar = People % microbus;
    let publicBus = bigcar * ticiktprice
    if(typeof People !== 'number' ){
        return "please provide a valid number";
        }
        return publicBus ;

}

}



// Problem 5: isBestFriend
// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।
// function isBestFriend (friend1,friends2) {
// if(friend1["friend"] == friends2["Name"] && friend1["Name"]== friends2["friend"]){
// if(typeof friend1 !== 'object' && friends2 !== 'object' ){
// return "Please provide a valid object";
// }
// return true;
// }
// else {
// if(typeof friend1 !== 'object' && friends2 !== 'object' ){
// return "Please provide a valid object";
// }
// return false;
// }
// }