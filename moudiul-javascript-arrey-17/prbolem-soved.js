// // _--------------------_--------------_-------------__---------
//         // problem 1
// // _--------------------_--------------_-------------__---------


// // ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?
// // ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.
// // ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.
// // ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.
// // ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.
// // ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.
// // ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.


// var relatives = [ "mehedi", "dipu", "shaown", "simanto", "opu"];
// var result = [44 , 76 , 88, 80, 65];
// relatives = result ;

// if(50 >= relatives[0] && relatives[0] < 60){
//     console.log("Mehedi", "grade D:", "D+")
// }
// else if(60 >= relatives[0] && relatives[0] < 70){
//     console.log("Mehedi", "grade C:", "C+")
// }
// else if(70 >= relatives[0] && relatives[0] < 80){
//     console.log("Mehedi", "grade B:", "B+")
// }
// else if(80 >= relatives[0] && relatives[0] < 90){
//     console.log("Mehedi", "grade A:", "A")
// }
// else if(90 >= relatives[0] && relatives[0] < 100){
//     console.log("Mehedi", "grade A:", "A+")
// }
// else{
//     console.log("Mehedi", "faile")
// }

// if(50 >= relatives[1] && relatives[1] < 60){
//     console.log("dipu", "grade D:", "D+")
// }
// else if(60 >= relatives[1] && relatives[1] < 70){
//     console.log("dipu", "grade C:", "C+")
// }
// else if(70 >= relatives[1] && relatives[1] < 80){
//     console.log("dipu", "grade B:", "B+")
// }
// else if(80 >= relatives[1] && relatives[1] < 90){
//     console.log("dipu", "grade A:", "A")
// }
// else if(90 >= relatives[1] && relatives[1] < 100){
//     console.log("dipu", "grade A:", "A+")
// }
// else{
//     console.log("dipu", "faile")
// }
//  *******To all continue*****

// // _--------------------_--------------_-------------__---------
//         // problem 2
// // _--------------------_--------------_-------------__---------

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো।

// var signel = "red"
// if(signel == "green"){
//     console.log("you Should croos The Road")
// }
// else if(signel == "yellow"){
//     console.log("you should patation and wait")
// }
// else{
//     console.log("if You Try to Cross the Road you should be in danger")
// } = if You Try to Cross the Road you should be in danger



// // _--------------------_--------------_-------------__---------
//         // problem 3
// // _--------------------_--------------_-------------__---------

// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

// var fruits = ['Apple', 'Banana', 'Orange'];

// // var index = fruits.indexOf("Banana");
// // fruits[1] = "Mango"
// // console.log(fruits) = [ 'Apple', 'Mango', 'Orange' ]


// fruits.pop();
// fruits.push("Watermelon");
// console.log(fruits) = [ 'Apple', 'Banana', 'Watermelon' ]



// // _--------------------_--------------_-------------__---------
//         // problem 4
// // _--------------------_--------------_-------------__---------

// 1. You are given three numbers 13, 79, and 45. Write a program that will print the
// largest number using if-else.

// var num1 = 13;
// var num2 = 79;
// var num3 = 45;

// if(num1 > num2 && num1 > num3){
//     console.log("biggest Number", num1)
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("biggest Number", num2)
// }
// else{
//     console.log("biggest Number", num3)
// }


// // _--------------------_--------------_-------------__---------
//         // problem 5
// // _--------------------_--------------_-------------__---------

// 2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
// triangle is Isosceles or not using if-else.
// Isosceles => two sides are equal

// var x = 9;
// var y = 8;
// var z = 9;
// if(x == y || y == z|| z == x){
//     console.log("Isosceles")

// }
// else{
//     console.log("Isosceles")
// }