// Module 18.5:

// Note TODO: 

// ১. জাভাস্ক্রিপ্ট কি জিনিস এইটা কি জানো?
// জাভাস্ক্রিপ্ট একটি স্ক্রিপ্টিং ল্যাঙ্গুয়েজ। ওয়েভসাইটের ক্লায়েন্ট পর্যায়ে অর্থাৎ ব্রাউজারে বিহেভিয়ার কন্ট্রোলের লক্ষ্য নিয়ে একে ডিজাইন করা হয়েছে। তবে বর্তমানে এটি ব্রাউজার ছাড়াও যে কোন অপারেটিং সিস্টেমে রান করে এবং অন্যান্য হাই লেভেল প্রোগ্রামিং ল্যাঙ্গুয়েজের মত সমস্ত বৈশিষ্ট্য এতে বিদ্যমান। এটি একটি পূর্ণাঙ্গ অবজেক্ট অরিয়েন্টেট ডায়নামিক ল্যাঙ্গুয়েজ। জাভাস্ক্রিপ্টের অফিসিয়াল নাম ইসিএমএ স্ক্রিপ্ট। এবং এটি ওয়েভ ডেভেলপমেন্টের জন্য অবশ্যই প্রয়োজনীয় ৩টি ল্যাঙ্গুয়েজের অন্যতম একটি।


// ২. জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেটা কি জানো?
// যখন JavaScript ফাইলটি ব্রাউজারে লোড করা হয়, তখন JavaScript ইঞ্জিন ফাইলের প্রতিটি লাইনকে উপরে থেকে নীচে চালাবে। এটি একটি interpreted programming language তাই সোর্স কোড এক্সিকিউশনের আগে বাইনারি কোডে কম্পাইল করা হয় না। জাভাস্ক্রিপ্ট ইঞ্জিন কোড লাইন থেকে লাইন পার্স করবে, এটিকে মেশিন কোডে রূপান্তর করবে এবং তারপর এটি কার্যকর করবে। জাভাস্ক্রিপ্ট ইঞ্জিন হল একটি কম্পিউটার প্রোগ্রাম যা জাভাস্ক্রিপ্ট কোড কার্যকর করে। জাভাস্ক্রিপ্ট ইঞ্জিনগুলি আজকের সমস্ত আধুনিক ব্রাউজারে অন্তর্নির্মিত, প্রতিটি ব্রাউজারের নিজস্ব জাভাস্ক্রিপ্ট ইঞ্জিন আছে কিন্তু সবচেয়ে পরিচিত ইঞ্জিন হল Google এর V8।
// যেকোনো জাভাস্ক্রিপ্ট ইঞ্জিনে সর্বদা একটি কল স্ট্যাক এবং একটি memory heap থাকে। কল স্ট্যাক হল যেখানে আমাদের কোড আসলে কার্যকর করা হয়। তারপর memory heap হল একটি অসংগঠিত মেমরি পুল যা আমাদের অ্যাপ্লিকেশনের প্রয়োজনীয় সমস্ত বস্তু সংরক্ষণ করে।


// ৩. ভেরিয়েবল কি জিনিস?
// ভেরিয়েবল বলতে এমন কিছুকে বোঝানো হয়ে থাকে যার মান সময়ের সাথে সাথে বদলানো যায়। যার মান সময়ের সাথে সাথে বিভিন্ন ভাবে প্রভাবিত হতে পারে এবং গাণিতিক মান কিংবা কোন কিছু প্রকাশ করার ক্ষেত্রে ব্যবহার করা যেতে পারে

// ৪. ভেরিয়েবল কিভাবে ডিক্লেয়ার করে 
// var exampleVariable = "Test";

// ৫. ভেরিয়েবল এর মান কিভাবে চেইঞ্জ করে বা আপডেট করে। 
// var exampleVariable = "Moja";
// // exampleVariable = "Moja na";


// ৬. কি কি ধরণের ভেরিয়েবল হয়। সেগুলা কি কি (হিন্টস: Numeric, String, Boolean)
// Numeric: var x = 1;
// String: var name = "Athir";
// Boolean: var isOk = true;
// Undefined: var something;
// Object: var x = {firstName:"John", lastName:"Doe"}; 
// Symbole: 
// --->
// Null: var a = null;
// if we check the data type of a using the typeof operator, we get 
// typeof(a);         // This returns object
// This means the type of a null value is an object, not null.
// <---

// ৭. জাভাস্ক্রিপ এ primitive and non primitive data types কি কি ? উদাহরণ হিসেবে বলো।
// The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol.
// The Non-Primitive data type has only one member i.e. the Object.


// ৮. ভেরিয়েবল এর নাম কিভাবে কিভাবে ডিক্লেয়ার করতে হয়। কোন কোন জিনিস নাম এ লেখা যাবে না। অর্থাৎ Variable এর naming convention সম্পর্কে বলো। 
// ### Underscores
// ### PascalCase
// ### camelCase - We using it. Example: myVariableHere.

// ৯. দুইটা ভেরিয়েবল এর মধ্যে =, -, *, /, % কিভাবে করে? 
// var a = 5; 
// var b = 10;
// var sum = a + b;
// var sub = a - b;
// var mul = a * b;
// var div = a / b;
// var mod = a % b;

// ১০. শর্টহ্যান্ড গুলো জানতে হবে। বিশেষ করে +=, -=, *=, /= জানতে হবে। 
// a += b Means a = a + b;
// a -= b Means a = a - b;
// a *= b Means a = a * b;
// a /= b Means a = a / b;


// ১১.. ++ এবং -- এর কাজ কি ? এইটা কি জানো। 
// ++ means increment by 1.
// -- means dicrement by 1.

// ১২ parseInt, parseFloat, toFixed এইগুলা কি করে? 

/// parseInt: It will convert value to Integer.

// parseFloat: The parseFloat() function parses an argument (converting it to a string first if needed) and returns a floating point number.

// toFixed: The toFixed() method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals.

// ১৩. Array কি জিনিস। এইটা কিভাবে কাজ করে? কিভাবে Array ডিক্লেয়ার করতে হয় 
//var array = ['String', 'Number', 'Boolean'];

// ১৪. array এর মধ্যে কয়টা উপাদান (element) আছে সেটা কিভাবে বের করে 
// var array = ['String', 'Number', 'Boolean'];
// console.log(array.length);

// ১৫. array এর উপাদান গুলা এর পজিশন ( index) কিভাবে কাজ করে। কত দিয়ে শুরু হয়। এবং মান কিভাবে চেইঞ্জ হয়। 
//Index Start From 0. and increment by 1.

// ১৬. কোন একটা উপাদানের index এর মান -১ বলতে কি বুঝায় 
// It's means that element in not valid.

// ১৭. কিভাবে index দিয়ে কোন একটা array এর মধ্যে উপাদান এর মান খুঁজে বের করতে পারো 
// var x = [3,3,4,5,6,76,66,4,3];
// console.log(x[5])

// var array = ['String', 'Number', 'Boolean'];
// array[1] = 'Object';
// console.log(array);

// ১৮. কিভাবে কোন একটা index পজিশন এ array এর উপাদান এর মান চেইঞ্জ করতে পারবে 
// var x = [3,3,4,5,6,76,66,4,3];
// x [5] = 45;
// console.log(x)

// var array = ['String', 'Number', 'Boolean'];
// array[1] = 'Object';
// console.log(array);

// ১৯. একটা Array এর মধ্যে কোন একটা উপাদান এর মান তোমাকে দেয়া আছে এখন সেটার index তুমি কিভাবে খুঁজে বের করতে পারো?
// var x = [3,3,4,5,6,76,,4,3];
// var y = x.indexOf(76)
// console.log(y)

// var array = ['String', 'Number', 'Boolean'];
// console.log(array.indexOf('Number'));


// ২০. ধরো, কোন একটা ইনডেক্স দিয়ে উপাদান খুঁজতে গেছো। কিন্তু সেটার মান না দিয়ে তোমাকে undefined দেখাচ্ছে। সেটা দেখে তুমি কি বুঝবে? (একটু গুগলে সার্চ দাও। আমরা কোর্স এ এইটা আলোচনা করিনি। তারপরেও চেষ্টা করে দেখো)
// var array = ['String', 'Number', 'Boolean'];
// console.log(array[4]); // It's Returned "Undefined" because there is no element available for index 4.

// ২১. কোন একটা Array এর মধ্যে লাস্ট উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে শেষের উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
// var array = ['String', 'Number', 'Boolean'];
// array.push('New Element Added');
// console.log(array);
// array.pop();
// console.log(array);

// ২২. কোন একটা Array এর মধ্যে প্রথম উপাদান হিসেবে কোন উপাদান হিসেবে যোগ করতে চাইলে কিভাৱে যোগ করবে। আবার Array থেকে প্রথম উপাদান টা বের করে দিতে চাইলে কিভাবে বের করে দিবে
// var array = ['String', 'Number', 'Boolean'];
// array.unshift('New Element Added');
// console.log(array);
// array.shift();
// console.log(array);

// ২৩. তুলনা কিভাবে করতে হয়। এইগুলার মানে কি: >, <, ==, !=, <=, >=, ===, !==, &&, ।। 
// > Greater Than.
// < Less Than.
// == Equal Equal
// != Not Equal
// <= Less Than Equal
// >= Greater Than Equal
// === Equal with DataType
// !== Not Equal With DataType
// && And
// || OR

// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 
// let myMoney = 100000;
// if (myMoney > 80000) {
//     console.log('MacBook');
// }
// else if (myMoney > 60000) {
//     console.log('Gaming Laptop');
// }
// else if (myMoney > 40000) {
//     console.log('Lenovo Yogo');
// }
// else if (myMoney > 20000) {
//     console.log('Old Laptop');
// }
// else {
//     console.log('Mobile');
// }


// ---------------------

// ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও। 
// var i = 1;
// while (i <= 39) {
//     console.log(i, 'Ajke Amar Mon Valo Nei');
//     i++;
// }

// ২৬. while লুপ কিভাবে কাজ করে 
// Definition and Usage
// The while statement creates a loop (araund a code block) that is executed while a condition is true.
// The loop runs while the condition is true. Otherwise it stops.


// ২৭. for লুপ কিভাবে কাজ করে 
// A for loop repeats until a specified condition evaluates to false. The JavaScript for loop is similar to the Java and C for loop.

// ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়। 
// If we not change the loop variable (i++/i--), it will be a Infinity loop forever.

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও 
// var num = 58;
// while(num <= 98){
//     console.log(num)
//     num++
// }

// for (i = 58; i <= 98; i++) {
//     console.log(i);
// }

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও 
// var num = 412;
// while(num <= 456){
//     console.log(num)
//     num+=2;
// }
// for (i = 412; i <= 456; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও 
// var num = 581;
// while(num <= 623){
//     console.log(num)
//     num+=2;
// }

// for (i = 581; i <= 623; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }


// ৩২.while আর for loop এর মধ্যে পার্থক্য কি 


// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও। 

// let elements = ["html", "css", "bootstrap", "tailwind"];
// for( let i = 0; i < elements.length; i ++){
//     let index = i;
//     let output = elements[index]
//     console.log(output)
// }

// var learnedThings = ['HTML', 'CSS', 'BOOTSTRAP', 'TAILWIND', 'JS'];
// for (let i = 0; i < learnedThings.length; i++) {
//     console.log(i, learnedThings[i]);
// }

// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও 

// var usedPhone = ['Nokia', 'Symphony', 'Walton', 'Xaiomi', 'RealMe', 'Apple'];
// var i = 0;
// while (i < usedPhone.length) {
//     console.log(i, usedPhone[i]);
//     i++;
// }

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও 


// for(var i = 30; i <= 86; i++){
//  console.log(i);
//  if(i > 45){
//    break;
//  }

// } 

// for (var i = 30; i < 86; i++) {
//     if (i == 44) {
//         break;
//     }
//     console.log(i);
// }



// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। 

// var items = [ 340, 144, 199, 245, 156, 283];
// for ( i = 0; i < items.length; i++){
//     var item = items[i];
//     if( item >= 200){
//         continue ;
//     }
//     console.log(item)
// }

// var books = [220, 100, 80, 210, 40, 400];
// for (i = 0; i < books.length; i++) {
//     if (books[i] <= 200) {
//         console.log(books[i]);
//     }
// }