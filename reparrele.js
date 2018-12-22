
let resultLetter = "";
let maxOccurance = 0;
let searchArray = ['a','c','b','c','a','b','a','a','c','c','c'];
let searchArrayLength = searchArray.length;
let i = 0;
while(searchArrayLength>0)
{
   let currentLetter = searchArray[i];
   let newArray = searchArray.filter(letter =>{
       if (letter != currentLetter) return letter;
   });
   let occurance = searchArray.length - newArray.length;
   if(maxOccurance < occurance)
   {
        resultLetter = currentLetter;
        maxOccurance = occurance;
   }
   searchArray = newArray;
   searchArrayLength = searchArray.length;
}
console.log("The Result letter",resultLetter," : Count is : ",maxOccurance);
 
