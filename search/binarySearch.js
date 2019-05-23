function binarySearch(arr,val){
    let left = 0;
    let right = arr.length-1 ;
    let middle ;
    while( left <= right ){
        middle = Math.floor((left+right)/2);
       
        if( arr[middle] === val ){
            return middle;
        }else if ( arr[middle] > val ){
            right = middle-1 ;
        }else if ( arr[middle] < val ){
            left = middle+1;
        }
    }
    return -1;
}

// my first guess 

// function binarySearch(arr,val){
//     let left = 0;
//     let right = arr.length-1 ;
//     let middle ;
//     while( left <= right ){
//         middle = Math.floor((left+right)/2);
//         // console.log(middle)
//         if( arr[middle] === val ){
//             return middle;
//         }else if ( arr[middle] > val ){
//             right = middle ;
//         }else if ( arr[middle] < val ){
//             left = middle;
//         }
//         if(right-left === 1){
//             left++;
//         }
//     }
//     return -1;
// }


console.log(binarySearch([1,2,3,4,10],10))