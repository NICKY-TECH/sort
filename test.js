// Q: Sort the array as per the rules of card game using generic method.
// var cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen']
// <!-- Requried Output = [2,3,5,6,8,'Jack','Queen','King']
// Q: Sort the array as per the rules of card game using generic method.
// Choose language of your choice.
// Sample output is attached.
// The code test is based on the rules of Deck card game. Just like we assign numbers to the strings and arrange the strings and integers in ascending order, we need to assign the lowest number to Jack and highest number to King. Queen comes in between. So if you arrange them in ascending order the required output will be [2,3,5,6,8,'Jack','Queen','King'].
// While writing the code, you need to make sure that the solution is written in Generic method and not hardcoded. To test that, you need to add 2 more Jacks, 2 more Queens and 2 more Kings. Hence, your output should have the same number of Jacks, Queens and Kings.
// You also need to make sure that your code should have just 1 loop. It shouldn't have more than 1 loop. It will disqualified your code.

let arr = ['Jack','Queen',8,2,6,'King',5,3,'Queen','King','Jack'];
let sortedArr =[];
let finalArr =[];
let firstArr =[];
let secondArr =[];
let thirdArr =[];
let index =0;
let lowestNumber=[];
function arrange (){
 for(let i=0;i<arr.length;i++){
  if(!(isNaN(arr[i]))){
  sortedArr.push(arr[i])
  }
  else if(isNaN(arr[i])){
let alteredString =arr[i].toLowerCase();
if(alteredString==='jack'){
firstArr.push(alteredString)
}
else if(alteredString==='queen'){
    secondArr.push(alteredString)
}else{
    thirdArr.push(alteredString)
}
finalArr =[...firstArr,...secondArr,...thirdArr]
  }
 }
 organizeNumbers(sortedArr)
return [...lowestNumber,...finalArr]

}

function organizeNumbers(numbersArr){
if(numbersArr.length!=0){
    let lowestValue = Math.min(...numbersArr);
    let foundIndex = numbersArr.indexOf(lowestValue)
   lowestNumber.push(lowestValue);
   numbersArr.splice(foundIndex,1);
   organizeNumbers(sortedArr);
}else{
    return 
}
 }

 
let result = arrange(arr);


console.log(result)
