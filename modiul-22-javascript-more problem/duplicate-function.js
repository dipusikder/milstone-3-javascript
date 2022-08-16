function toUniqueArray(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  return newArr;
}
var colors = ["red","red","green","green","green"];
var colorsUnique=toUniqueArray(colors); // ["red","green"]