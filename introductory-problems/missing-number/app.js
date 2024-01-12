/**
 * At first you may think that you can solve
 * it with 2 for loops inside each other. But
 * this method's complexity is 8 and it's time
 * to do something.
 *
 * I show an example below
 */

var n = 8;
var givenArray = [4, 9, 2, 8, 11, 5, 1, 10, 7, 3]; // find the number 8

function getMissingNumber1(givenArray) {
   var i = 1;
   var found = true;
   for(i = 1; i <= n; i++){
      if(!found){
         break;
      }
      found = false;
      for(var j = 0; j < givenArray.length; j++){
         if(givenArray[j]==i){
            found = true;
            continue;
         }
      }
   }
   return i-1;
}

var output = getMissingNumber2(givenArray);
console.log("Found it with complex method: " + output);

/**
 * But when you think about it, there's an easier
 * and less time complex way. This moethod's
 * complexity is 3, it's cool ;)
 *
 * Here is an example;
 */

function getMissingNumber2(givenArray) {
   const n = givenArray.length + 1;
   const sumOfFullArray = (n * (n + 1)) / 2;

   let sumOfGivenArray = 0;
   for(let i = 0; i < n - 1; i++) {
      sumOfGivenArray = sumOfGivenArray + givenArray[i];
   }
   return sumOfFullArray - sumOfGivenArray;
}

var output = getMissingNumber2(givenArray);
console.log("Found it with non-complex method: " + output);
