You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.



var sum = 0;
function positiveSum(arr) {
   for(var i = 0; i<=arr.length; i++ ){
   console.log(arr[i]);
     if(arr[i] > 0){
     sum += arr[i]
     console.log(sum);
   }
}
 return sum;
}