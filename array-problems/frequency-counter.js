// this approch if O(N^2)
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for(let i=0; i<arr1.length; i++){
//         // indexOf iterate whole array
//         let currectIndex = arr2.indexOf(arr1[i]**2)
//         // currentIndex return -1 if value does not exist
//         if(currectIndex == -1){
//             return false
//         }
//         // this will remove the value form the array
//         arr2.splice(currectIndex,1)
//     }
//     return true
// }

// standard method  O(N)
function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1
    }
    for(let key in frequencyCounter1){
        if(!(key**2 in frequencyCounter2)){
            return false
        }
        if((frequencyCounter2[key**2] !== frequencyCounter1[key])){
            return false
        }
    }
    return true

}
const arr1 = [1,2,3,2]
const arr2 = [9,1,4,4]
console.log(same(arr1,arr2))
