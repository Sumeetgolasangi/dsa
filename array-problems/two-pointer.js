
// function sumZero(arra){
//     for(let i=0; i<arra.length; i++){
//         for(let j=i+1;j<arra.length; j++){
//             if(arra[i] + arra[j] === 0){
//                 return [arra[i],arra[j]]
//             }
//         }
//     }
// }
function sumZero(arra){
    let left = 0;
    let right = arra.length -1;
    while(left<right){
        let sum = arra[left] + arra[right]
        if(sum == 0){
            return [arra[left],arra[right]]

        // we are considering only positive , because array is sorted kist
        } else if( sum > 0 ){
            right --;
        } else {
            left ++
        }
    }
}
// returning first pair which give us zero
console.log(sumZero([-3,-2,-1,0,1,2,3]))