

// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-1: 
// =========================//=========================//=========================
// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 


// function namta(input) {
//     for (var i = 1; i <= 10; i++) {
//         var finalNamta = i * input;
//         console.log(i, 'x', input, '=', i * input);
//     }
//     return finalNamta;
// }
// var result = namta(13);



// function into(digit){
//     const multiple = digit * 13;
//     return multiple;
// }
// const one = 1;
// const two = 2;
// const three = 3;
// const four = 4;
// const five = 5;
// const six = 6;
// const seven = 7;
// const eight = 8;
// const nine = 9;
// const ten = 10;
// const result1 = into(one)
// const result2 = into(two)
// const result3 = into(three)
// const result4 = into(four)
// const result5 = into(five)
// const result6 = into(six)
// const result7 = into(seven)
// const result8 = into(eight)
// const result9 = into(nine)
// const result10 = into(ten)
// console.log(result1, result2, result3, result4, result5, result6, result7, result8, result9, result10)


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-2: 
// =========================//=========================//=========================
// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
// প্রাকটিস চ্যালেঞ্জ-1: 
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.toLocaleUpperCase());



//     var result = input.toLowerCase();
//     return result;
// }
// var text = 'Test'
// var finalResult = upperCaseToLowerCaseConveter(text);
// console.log(finalResult);

// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-3: 
// =========================//=========================//=========================
// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
// function fullName(fname, lname) {
//     var name = fname + ' ' + lname;
//     return name;
// }
// var firstValue = 'Hablu';
// var lastValue = 'kantu';
// var fullNameIs = fullName(firstValue, lastValue);
// console.log(fullNameIs);




// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-4: 
// =========================//=========================//=========================
// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।
// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  
// function square(input) {
//     var result = input * input;
//     return result;
// }
// var squareResult = square(5);
// console.log(squareResult);



// function squareMyNumber(no){
//     return no * 5
// }

// let squared = squareMyNumber(5);
// console.log(" 5 * 5 = ",squared);



// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-5: 
// =========================//=========================//=========================
// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
// const pizza = {
//  toppings: ['cheese', 'sauce', 'pepperoni'],
//  crust: 'deep dish',
//  serves: 2
// }
// এবং pepperoni প্রিন্ট করবা। 

// var pizza = {
//     toppings: ['cheese', 'sauce', 'pepperoni'],
//     crust: 'deep dish',
//     serves: 2
// }
// console.log(pizza.toppings[2]);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-5: 
// =========================//=========================//=========================
// Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.

// function foo() {
//     console.log('foo');
//     bar();
// }
// function bar() {
//     console.log('bar');
// }
// foo();

// Its Printing : 
// foo
// bar

// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-7: 
// =========================//=========================//=========================
// Challenging: Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.

// function make_avg(array) {
//     sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         var marks = array[i];
//         sum = sum + marks;
//     }
//     var avarage = sum / array.length;
//     return avarage;

// }
// var items = [59, 58, 60];
// var resultIs = make_avg(items);
// console.log(resultIs);

// function make_avg(array) {
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         let index = i
//         let convert = array[index]
//         sum = sum + convert
//         // return convert
//     }
//     var avarage = sum / array.length;
//     return avarage
    
// }
// let numbers = [ 44, 34, 76]
// let result = make_avg(numbers)
// console.log(result);


// =========================//=========================//=========================
// প্রাকটিস চ্যালেঞ্জ-8: 
// =========================//=========================//=========================
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:

// ● Has return + Has parameter

// function odd_even(integer) {
//     if (integer % 2 == 0) {
//         console.log("Even")
//         return integer;
//     }
//     else {
//         console.log("Odd")
//     }
// }
// var result = odd_even(100);


// ● No return + Has parameter
// function odd_even(integer) {
//     if (integer % 2 == 0) {
//         console.log("Even")
//     }
//     else {
//         console.log("Odd")
//     }
// }
// odd_even(99);
