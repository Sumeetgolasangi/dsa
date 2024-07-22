// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:



function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    let counterFrequency1 = {}
    let number1 = num1.toString()
    let number2 = num2.toString()
    if(number1.length !== number2.length){
        return false
    }
    for(let i=0; i<number1.length; i++){
        counterFrequency1[number1[i]] = (counterFrequency1[number1[i]] || 0) + 1 
    }
    for(let i=0; i<number2.length; i++){
        if(!(counterFrequency1[number2[i]])){
            return false;
        } else{
            counterFrequency1[number2[i]] -= 1
        }
    }
    return true;
}
  
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
