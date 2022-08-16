// _--------------------_--------------_-------------__---------
// ************ What is the diffrence betwen var And let *******
// _--------------------_--------------_-------------__---------



// _________---------_____________------_______________-----
// ***** if we declare a var and console log outside of Block its work*****
// ***** if we declare a let and console log outside of Block its not work*****
// _________---------_____________------_______________-----

if (true){
    var x = 50;
}
    

if(true){
    let y = 60;
}
    
console.log(x)
console.log(y)


// _________---------_____________------_______________-----
// ****** We can set let value agine but we can not set constent Value
// _________---------_____________------_______________-----