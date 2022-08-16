// // // // // _________---------_____________------_______________-----
// // // ** how can we count a string one by one       problem 1
// // // // // _________---------_____________------_______________-----  


// function reversedstring(text) {
//     for (let i = 0; i < text.length; i++) {
//         const element = text[i];
//         console.log(element)
//     }    
//     }
//     reversedstring("i am a good boy");

//     i
//     a
//     m
    
//     a
    
//     g
//     o
//     o
//     d
    
//     b
//     o
//     y

    // // // // // _________---------_____________------_______________-----
// // // ** how can we count a number one by one reverse      problem 2
// // // // // _________---------_____________------_______________-----  


// function reversedstring(text) {
//     for (let i = text.length-1; i >= 0; i--) {
//         const element = text[i];
//         console.log(element)
//     }    
//     }                                                            
//     reversedstring("i am a good boy")
// y
// o
// b

// d
// o
// o
// g
 
// a

// m
// a

// i

    // // // // // _________---------_____________------_______________-----
// // // ** how can we count a number one by one reverse  side side and complete    problem 3
// // // // // _________---------_____________------_______________-----  

// function reversedstring(text) {
//     let convert = '';
//     for (let i = text.length-1; i >= 0; i--) {
//         const element = text[i];
//         convert = convert + element
//         console.log(element, convert)
//     }    
//     return convert
//     }                                                            
//     const mytext =("i am a good boy")
//     const result = reversedstring(mytext)
//     console.log(result)
// //     y y
// o yo
// b yob        
//   yob        
// d yob d      
// o yob do     
// o yob doo    
// g yob doog   
//   yob doog   
// a yob doog a 
//   yob doog a 
// m yob doog a m
// a yob doog a ma
//   yob doog a ma
// i yob doog a ma i
// yob doog a ma i


// let string = "We are going to reverse a string with built-in method.";
// let reversed = string.split("").reverse().join("");
// console.log(reversed);                               (Shortcut)


function reverseWords(str) {
    const allWords = str.split(" ")
    return allWords.map(item => item.split("").reverse().join("")).join(" ")
  }
  const word = "i am a good boy"
  const result = reverseWords(word)
  console.log(result)




  // console.log(117 % 50)