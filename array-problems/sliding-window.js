
// function maxSubArraySum(array,num){
//      if( num > array.length ){
//         return null;
//      }
//      let max = -Infinity;
//      for(let i = 0; i<array.length - num +1; i++){
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += array[i+j]; 
//         }
//         if(temp>max){
//             max = temp;
//         }
//         console.log(temp,max)
//      }
//      return max;
// }

function maxSubArraySum(array,number){
    let maxSum = 0;
    let tempSum = 0;
    if(array.length < number) return null;

    for(let i=0; i<number; i++){
        maxSum += array[i]
    }

    tempSum = maxSum

    for(let i=number; i<array.length; i++){
        tempSum = tempSum - array[i-number] + array[i];
        maxSum = maxSum > tempSum ? maxSum : tempSum
    }

    return maxSum
}
//O(N)
const array = [1,2,5,2,8,1,5]
const number = 4
console.log(maxSubArraySum(array,number))