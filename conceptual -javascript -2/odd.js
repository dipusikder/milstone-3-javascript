// _-----------------------_
// *** find out even and odd number with has retrun and no retrun
// _-----------------------_



// _-----------------------_
// *** find out even and odd number with no retrun
// _-----------------------_

function Oddeven(numbers){
    if(numbers % 2 == 0){
        console.log("is is even")
    }
    else{
        console.log("is is odd")
    }
}
Oddeven(55);
Oddeven(54);

// _-----------------------_
// *** find out even and odd number with has retrun
// _-----------------------_

function chekoddeven(numbers){
    if(numbers % 2 == 0){
        return "is is even";
    }
    else{
        return "is is odd";
    }
}
// let result = chekoddeven(44);
// console.log(result);
console.log(chekoddeven(44));
