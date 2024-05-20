/*
   3
   2 3
   1 1
   4 2
*/

const solveSpriral = (x, y) => {
   const max = Math.max(x, y);
   let diagonal = max * max - max + 1;
   if (max % 2 === 0) {
      return diagonal + (x - y);
   }else {
      return diagonal + (y - x);
   }
};

console.log("(2, 3) ->", solveSpriral(3, 3));
console.log("(1, 1) ->", solveSpriral(2, 3));
console.log("(4, 2) ->", solveSpriral(4, 2));
console.log("(5, 5) ->", solveSpriral(5, 5));
console.log("(5, 3) ->", solveSpriral(5, 3));
console.log("(3, 5) ->", solveSpriral(3, 5));
console.log("(5, 1) ->", solveSpriral(5, 1));
console.log("(1, 5) ->", solveSpriral(1, 5));
console.log("(7, 7) ->", solveSpriral(7, 7));
console.log("(7, 3) ->", solveSpriral(7, 3));
