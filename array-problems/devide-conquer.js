
// linear Search O(N)
// function search(array,value){
//     for(let i = 0; i < array.length; i++){
//         if(array[i]==value){
//             return i
//         }
//     }
//     return -1;
// }

// Binary Search

function search(array,value){
    let min = 0;
    let max = array.length -1
    while (min<=max){
        let middle = Math.round((min + max)/2)
        let currentElement = array[middle];
        if(array[middle]<value){
            min = middle + 1
        } else if(array[middle] > value){
            max = middle -1
        } else {
            return middle
        }
    }
    return -1
}
// Time complexity - Log(N) - Binary Search

const array = [1,2,3,4,5,6,7,8,9,20,11,12,13,14,15,16,17,23,234,264,2345,32452,254234,345346]
const number = 254234
console.log(search(array,number))
