// const friends = [ 66, 78, 54, 98, 23, 66, 33]

// let cut = friends.splice(2, 6);
// console.log(cut) = [ 54, 98, 23, 66, 33 ]




let arr = ['foo', 'bar', 10, 'qux'];

// arr.splice(<index>, <steps>, [elements ...]);

arr.splice(1, 1);			// Removes 1 item at index 1
// => ['foo', 10, 'qux']

arr.splice(2, 1, 'tmp');	// Replaces 1 item at index 2 with 'tmp'
// => ['foo', 10, 'tmp']

arr.splice(0, 1, 'x', 'y');	// Inserts 'x' and 'y' replacing 1 item at index 0
// => ['x', 'y', 10, 'tmp']
console.log(arr)