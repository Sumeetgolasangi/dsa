// function validAnagram(str1,str2){
//     // add whatever parameters you deem necessary - good luck!
//     if(str1.length !== str2.length){
//         return false
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let str of str1){
//         frequencyCounter1[str] = (frequencyCounter1[str] || 0) + 1
//     }
//     for(let str of str2){
//         frequencyCounter2[str] = (frequencyCounter2[str] || 0) + 1
//     }
//     for(let key in frequencyCounter1){
//         if(!(key in frequencyCounter2)){
//             return false
//         }
//         if(!(frequencyCounter1[key] == frequencyCounter2[key])){
//             return false
//         }
//     }
//     return true
// }

//optimized version
function validAnagram(str1,str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length){
        return false
    }
    let lookUp = {}
    for(let str of str1){
        lookUp[str] = (lookUp[str] || 0) + 1
    }
    for(let str of str2){
        // lookUp[str] = 0 then it is false
        if(!lookUp[str]){
            return false
        }else{
            lookUp[str] -= 1
        }
    }
    return true
}
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
