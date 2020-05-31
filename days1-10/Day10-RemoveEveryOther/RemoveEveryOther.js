// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!

var arr2 = [];
function removeEveryOther(arr){
  for (var i = 0; i < arr.length; i++){
   if( i % 2 === 0 ){
   arr2.push(arr[i]);
   }
 }
  return arr2
}