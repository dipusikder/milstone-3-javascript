let sum = 1
for( let i = 1; i <= 7; i++){
    sum = sum + i                // *********Normal Sum*****
    console.log(i, sum)
}                                             

function getsumofarrey(numbers){
    let sum = 0; // ***** ekhne sum namer ekta let er nam diye etar man dilam 0 and for loop er baire***
    for (let i = 0; i < numbers.length; i++ ){
        const index = i; 
        // **** Ekhane i er man er sathe i er  index  er sathe elemt k coneection korse and output hisebe  0 to 6 porjonto pabe*** 
        const element = numbers[i]; // **** Ekhane number er index k i hisebe deleare korate number er sob element show korbe*** 
        sum = sum + element // *** ekhne sum er new value jehutu set kortesi tai direct sum lekehe sum er valu sathe element er value jog korlam
        console.log(index,element, sum);
        // ****eksathe onek gula result decleare korar rules
    }
}
const mynumbers = [34, 55, 87, 44, 98, 21, 88]; // **** arrey bhitor numbers er value******
getsumofarrey(mynumbers)

function age(year){
    const reminder = year % 2;
 if(reminder == 0){
    return ("age:", true);
 }
 return ("age:", false);
 }
 const myAge = 22;
 const result = age(22);
 console.log(result);
