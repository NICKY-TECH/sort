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
