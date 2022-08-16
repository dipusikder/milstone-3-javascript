// // // _________---------_____________------_______________-----
// ** How to Convert anything into lowercase and uppercase                  problem 1
// // // _________---------_____________------_______________-----
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.toLocaleUpperCase()); = THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.



// const sentence1 = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.';

// console.log(sentence1.toLocaleLowerCase()); = the quick brown fox jumps over the lazy dog.



// // // _________---------_____________------_______________-----
// ** How to find out any string in var or let or const ****                    problem 2
// // // _________---------_____________------_______________-----

// const lyrics =" tumi bondhu kala pakhi ami jno ki bosonto kalo tmoay bolte pari ni kala kala sada sada"

// const doseexist = lyrics.includes("pakhi");
// console.log(doseexist) 

// = true


// // // _________---------_____________------_______________-----
// ** How to find out any string in var or let or const with fix case sensitive ****
// // // _________---------_____________------_______________-----                     problem 3

// const lyrics =" tumi bondhu kala pakhi ami jno ki bosonto kalo tmoay bolte pari ni kala kala sada sada"
// const searchString = "Pakhi"

// const lyricsLowercase = lyrics.toLowerCase();
// const sarchLowercase = searchString.toLowerCase();
// const doseexist = lyricsLowercase.includes(sarchLowercase);

// const doseexistline = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doseexist); = True
// console.log(doseexistline); = true



// // // // _________---------_____________------_______________-----
// // ** How to find out any string index  ****
// // // // _________---------_____________------_______________-----                     problem 4

// const lyrics =" tumi bondhu kala pakhi ami jno ki bosonto kalo tmoay bolte pari ni kala kala sada sada"

// console.log(lyrics.indexOf("kala")) = 13 **** Note if declare string is multiple then its find the first one and deliver first one index




// // // // _________---------_____________------_______________-----
// // ** if we dose not find out any string in out const then what will be the output  ****
// // // // _________---------_____________------_______________-----                     problem 5

// const lyrics ="tumi bondhu kala pakhi ami jno ki bosonto kalo tmoay bolte pari ni kala kala sada sada"
// console.log(lyrics.indexOf("maya"))
// = -1





// // // // _________---------_____________------_______________-----
// // ** How to chek  any string index  **** With if Else***
// // // // _________---------_____________------_______________-----                     problem 6


// const lyrics ="tumi bondhu kala pakhi ami jno ki bosonto kalo tmoay bolte pari ni kala kala sada sada"
// if(lyrics.indexOf("tumi") !== -1){
//     console.log('yes it is exist') = yes it is exist
// }
// else{
//     console.log("No its not exist")
// }


// // // // _________---------_____________------_______________-----
// // ** How to chek  any which strig startwith index          problem 7
// // // // _________---------_____________------_______________-----      

// const lyrics ="tumi bondhu kala pakhi ami jno ki bosonto kalo tmoay bolte pari ni kala kala sada sada"
// console.log(lyrics.startsWith("tumi")) = true





// // // // _________---------_____________------_______________-----
// // ** How to chek  any which strig endtwith index          problem 8
// // // // _________---------_____________------_______________-----  


const lyrics ="tumi bondhu kala pakhi ami jno ki bosonto kalo tmoay bolte pari ni kala kala sada sada"
console.log(lyrics.endsWith("sada")) = true

// // // // _________---------_____________------_______________-----
// // ** How to split or divided and space every string          problem 9
// // // // _________---------_____________------_______________-----  

// const lyrics ="tumi bondhu kala pakhi ami jno ki bosonto kalo tmoay bolte pari ni kala kala sada sada"
// const parts = lyrics.split(' ');
// console.log(parts);

// ='tumi',  'bondhu',  'kala',
// 'pakhi', 'ami',     'jno',
// 'ki',    'bosonto', 'kalo',
// 'tmoay', 'bolte',   'pari',
// 'ni',    'kala',    'kala',
// 'sada',  'sada'




// // // // _________---------_____________------_______________-----
// // ** How to split or divided and creat a line in string          problem 10
// // // // _________---------_____________------_______________-----  


// const lyrics ="tumi bondhu kala pakhi. ami jno ki. bosonto kalo tmoay bolte pari ni. kala kala sada sada"
// const line = lyrics.split('.')
// console.log(line)

// = 'tumi bondhu kala pakhi',
// ' ami jno ki',
// ' bosonto kalo tmoay bolte pari ni',
// ' kala kala sada sada'




// // // // _________---------_____________------_______________-----
// // ** How to split or diveded every string one by one and gap          problem 11
// // // // _________---------_____________------_______________-----  

// const lyrics ="tumi bondhu kala pakhi. ami jno ki. bosonto kalo tmoay bolte pari ni. kala kala sada sada"
// const gap = lyrics.split('');
// console.log(gap)

// = 't', 'u', 'm', 'i', ' ', 'b', 'o', 'n', 'd', 'h', 'u',
// ' ', 'k', 'a', 'l', 'a', ' ', 'p', 'a', 'k', 'h', 'i',
// '.', ' ', 'a', 'm', 'i', ' ', 'j', 'n', 'o', ' ', 'k',
// 'i', '.', ' ', 'b', 'o', 's', 'o', 'n', 't', 'o', ' ',
// 'k', 'a', 'l', 'o', ' ', 't', 'm', 'o', 'a', 'y', ' ',
// 'b', 'o', 'l', 't', 'e', ' ', 'p', 'a', 'r', 'i', ' ',
// 'n', 'i', '.', ' ', 'k', 'a', 'l', 'a', ' ', 'k', 'a',
// 'l', 'a', ' ', 's', 'a', 'd', 'a', ' ', 's', 'a', 'd',
// 'a'

// // // // _________---------_____________------_______________-----
// // ** How to slice and cut in  a string and with rules          problem 11
// // // // _________---------_____________------_______________-----  

// const lyrics ="tumi bondhu kala pakhi. ami jno ki. bosonto kalo tmoay bolte pari ni. kala kala sada sada"
// const cut = lyrics.slice(5, 11);           // ****Note*** 

//                                                 // **jei number theke start korbo r jei number er age thambo***
// console.log(cut);
// = bondhu


// // // // // _________---------_____________------_______________-----
// // // ** How to slice and cut in  a string and with substring          problem 12
// // // // // _________---------_____________------_______________-----  

// const lyrics ="tumi bondhu kala pakhi. ami jno ki. bosonto kalo tmoay bolte pari ni. kala kala sada sada"
// const sub = lyrics.substring(5, 11); 

// // *** Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end. If end is omitted, the characters from start through the end of the original string are returned.

// console.log(sub) = bondhu



// // // // // _________---------_____________------_______________-----
// // // ** if u had multiple string line in arrey then print them into one line          problem 13
// // // // // _________---------_____________------_______________-----  



// const line = [ 
// 'tumi bondhu kala pakhi',
// 'ami jno ki',
// 'bosonto kalo tmoay bolte pari ni',
// 'kala kala sada sada']

// const newsong = line.join(':');
// console.log(newsong)




// // // // // _________---------_____________------_______________-----
// // // ** what is at property in string       problem 13
// // // // // _________---------_____________------_______________-----  

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// let index = -4;
// let index1 = 5;

// console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// // expected output: "Using an index of -4 the character returned is d"
// console.log(`Using an index of ${index1} the character returned is ${sentence.at(index1)}`);
// // expected output: "Using an index of 5 the character returned is u"


// // // // // _________---------_____________------_______________-----
// // // ** what is last index in string        problem 14
// // // // // _________---------_____________------_______________-----  



// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// const searchTerm = 'dog';

// console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// // expected output: "The index of the first "dog" from the end is 52"


// // // // // _________---------_____________------_______________-----
// // // ** what is trim in string        problem 15
// // // // // _________---------_____________------_______________-----  


// const greeting = '   Hello world!   ';

// console.log(greeting);
// // expected output: "   Hello world!   ";

// console.log(greeting.trim());
// // expected output: "Hello world!";



// // // // // _________---------_____________------_______________-----
// // // ** what is trim start in string        problem 16
// // // // // _________---------_____________------_______________-----  

// const greeting = '   Hello world!   ';

// console.log(greeting);
// // expected output: "   Hello world!   ";

// console.log(greeting.trimStart());
// // expected output: "Hello world!   ";


// // // // // _________---------_____________------_______________-----
// // // ** what is trim end in string        problem 17
// // // // // _________---------_____________------_______________-----  

// const greeting = '   Hello world!   ';

// console.log(greeting);
// // expected output: "   Hello world!   ";

// console.log(greeting.trimEnd());
// // expected output: "   Hello world!";



// // // // // _________---------_____________------_______________-----
// // // ** what is concat in string        problem 18
// // // // // _________---------_____________------_______________-----  

// const str1 = 'Hello';
// const str2 = 'World';

// // console.log(str1.concat(' ', str2));
// // // expected output: "Hello World"

// console.log(str2.concat(', ', str1));
// // expected output: "World, Hello"
