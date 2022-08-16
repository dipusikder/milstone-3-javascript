// Using For Loop
var works = ['unloak at 8', 'watch video', 'take note', 'practice', 'join support'];
for (let i = 1; i <= 10; i++) {
    console.log(i);
    for (let i = 0; i < works.length; i++) {
        var index = i;
        var items = works[index];
        console.log(items);
    }
}

//Using While Loop
// var works = ['unloak at 8', 'watch video', 'take note', 'practice', 'join support'];
// let j = 1;
// while (j <= 10) {
//     console.log(j);
//     j++;
//     let i = 0;
//     while (i < works.length) {
//         console.log(works[i]);
//         i++
//     }
// }

 var works = ['unloak at 8', 'watch video', 'take note', 'practice', 'join support'];
// Using While Loop (REVERSE)
// var j = 10;
// while (j >= 1) {
//     console.log(j);
//     j--;
//     var i = works.length - 1;
//     while (i >= 0) {
//         console.log(works[i]);
//         i--;
//     }
// }

// Using For Loop (REVERSE)
// for (var i = 10; i >= 1; i--) {
//     console.log(i);
//     for (var j = works.length - 1; j >= 0; j--) {
//         console.log(works[j]);
//     }
// }