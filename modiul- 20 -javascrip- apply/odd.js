
// 20-6 Get Odd Numbers of an array and get odd Sum of an array
function getsumofarrey(numbers){
    let sum = 0; 
    for (let i = 0; i < numbers.length; i++ ){
        const index = i; 
        const element = numbers[i]; 
        sum = sum + element 
        console.log(index,element, sum);
        
    }
}

function numbers(digit){
    let oddnumbers=[]  // *****ekhne 1 ta man k rakhle var er moto use korsi ekhn onkgula dekhe arrey
    for(let i = 0 ; i < digit.length; i++){
        const index = i;
        const element = digit[i];
        if(element % 2 !== 0){
            console.log(index, element);
            oddnumbers.push(element);  // *****oddnumbers er bhitor eliment er result k push korchi**** 
        }
    }
    return oddnumbers;
}
const mynumbers = [34, 55, 87, 44, 98, 21, 88];
const oddnumbers = numbers(mynumbers);
console.log(oddnumbers);
const myoddsum = getsumofarrey(oddnumbers);
console.log(myoddsum); 