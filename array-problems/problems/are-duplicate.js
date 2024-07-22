// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
//and checks whether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// using frequency conuter
// function areThereDuplicates(...arguments) {
//     let counter = {}
//     for(let i = 0; i < arguments.length; i++){
//         counter[arguments[i]] =  (counter[arguments[i]] || 0) + 1
//         if(counter[arguments[i]]>1){
//             return true
//         }
//     }
//     return false
//     // good luck. (supply any arguments you deem necessary.)
// }


// using two pointer 
function areThereDuplicates(...args) {
    let i = 0

    let j = 1;
    args.sort()
    // Traverse through the sorted array
    while (j < args.length) {
        if (args[i] === args[j]) {
            return true; // Found duplicate
        }
        i++;
        j++;
    }
    return false
    // good luck. (supply any arguments you deem necessary.)
}
// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
