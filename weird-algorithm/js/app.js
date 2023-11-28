var readline = require('readline');

var r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

r.on('line', function (line) {
    var vals = line.split(" ");
    var n = parseInt(vals[0]);
    var output = '';
    
    if(n >= 1 && n <= 1000000){
      output += n + ' ';
      while(n != 1){
         if(n%2 === 0) {
            n = n / 2;
         }else {
            n = (n * 3) + 1;
         }
         output += n + ' ';
      }
   }else{
      console.log("'n' is not in the right range ->" + n);
   }
   
   console.log(output);
   output = '';
});
