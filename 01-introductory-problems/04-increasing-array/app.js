function getIterationCount(N, array){
   var iterationCount = 0;
   for(var i = 1; i < N; i++){
       if(array[i] < array[i-1]){
           iterationCount += array[i-1] - array[i];
           array[i] = array[i-1];
       }
   }
   return iterationCount;
}

const N = 8;
const array = [8, 2, 4, 2, 6, 2, 8, 2];
const iterationCount = getIterationCount(N, array);
console.log(iterationCount);
