function countUniqueValues(array){
    if(array.length==0){
        return 0
    }
    let i = 0
    for(let j=1; j<array.length; j++){
        if(array[i] !== array[j]){
            i++;
            array[i] = array[j]
        }
    }
    return i + 1
}

// array function should except sorted array
// const array = [1,1,1,1,3,2]
const array = [1,2,3,4,4,12,12,7,13]
// const array = [-1,-2,1,1,3,2,4]

console.log(countUniqueValues(array))
