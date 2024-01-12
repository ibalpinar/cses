function getRepetition(givenSequence){
   var givenSequenceArray = givenSequence.split('');
   var currentRepetition = 1;
   var maxRepetition = 1;
   var tempChar = 0;
   tempChar = givenSequenceArray[0];

   for(let i = 1; i < givenSequenceArray.length; i++){
      if(tempChar == givenSequenceArray[i]){
         currentRepetition++;
      }else{
         if(currentRepetition > maxRepetition)
            maxRepetition = currentRepetition;
         currentRepetition = 1;
      }
      tempChar = givenSequenceArray[i];
   }
   return maxRepetition;
}

var givenSequence = 'ATTCGATTCGGAGGAACGTGGGGGGGGGGGGGGCGATTGAACAGCGCTGACAGTCTGACTTTGCA';
maxRepetition = getRepetition(givenSequence);
console.log(maxRepetition);
