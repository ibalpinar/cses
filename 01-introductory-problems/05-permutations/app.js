function calculatePermutation(n){
   let permutationArray = [];
   if(n % 2 === 0){
      for(let i = 2; i <= n; i += 2){
         permutationArray.push(i);
      }
      for(let i = 1; i <= n; i += 2){
         permutationArray.push(i);
      }
   }else if(n % 2 !== 0){
      for(let i = 1; i <= n; i += 2){
         permutationArray.push(i);
      }
      for(let i = 2; i <= n; i += 2){
         permutationArray.push(i);
      }
   }
   return permutationArray;
}

const n = 9;
const permutationArray = calculatePermutation(n);
console.log(permutationArray);
