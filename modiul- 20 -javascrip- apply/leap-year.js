// function isLeap(year) {
//     if (year % 4 === 0) {
//        if (year % 100 === 0){
//           if (year % 400 == 0){
//              return ("Leap year.");
//           } else {
//              return ("Not leap year.");
//           }
//        } else {
//           return ("Leap year.");
//        }
//     } else{
//        return ("Not leap year.");
//     }
//  }
//  const leapyear = isLeap(2023)
//  console.log(leapyear)
//  const leapyear1 = isLeap(2020)
//  console.log(leapyear1)

function lep(year){
   const reminder = year % 4;
if(reminder == 0){
   return ("Leap year:", true);
}
return ("not a Leap year:", false);
}

const leapyear = lep(2020);
console.log("is this leap year",leapyear);
const leapyear1 = lep(2023);
console.log("is this leap year", leapyear1)