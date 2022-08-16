// // _________---------_____________------_______________-----
// ******Switch-Case***
// // _________---------_____________------_______________-----




// // _________---------_____________------_______________-----
// ******What is Switch***
// ans: *** The switch statement is used to perform different action based on different conditions.****
// // _________---------_____________------_______________-----



// // _________---------_____________------_______________-----
// ******How was the stracture of Switch Look like***
// // _________---------_____________------_______________-----


// switch (Expression){
//     case x:
//         // code block
//         break;

//     case y :
//         // code block
//         break;
//         default:
//             // code block
// }

// // _________---------_____________------_______________-----
// ****** print a simple grade structur with switch**
// // _________---------_____________------_______________-----

const grade = "A+"
switch(grade){
    case "A+":
        console.log("Excellent");
        break;
    case "B+":
        console.log("quite Good");
        break;
    case "C+":
        console.log("Avarege");
        break;
    case "D":
        console.log("Need to Improve");
        break;
    case "F":
        console.log("Failed");
        break;
        default:
            console.log("Unkown Grade")
}