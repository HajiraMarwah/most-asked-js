function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [2, 7]



function twoSum(number,target){
    for(let i=0;i<number.length;i++){
        for(let j=i+1;i<number.length;j++){
            if(number[i]+number[j]===target){
                return[number[i],number[j]]
            }
        }
    }
}
console.log(twoSum([1,2,3,4,5],7))