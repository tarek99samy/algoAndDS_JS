
// inser element to right index
function insertSort(arr){

    for(let i=0;i<arr.length-1;i++){
        if( arr[i] > arr[i+1] ){
            for(let j = 0; j<=i;j++){
                if( arr[i+1] < arr[j]  ){
                    let temp = arr[i+1];
                    arr[i+1] = arr[j];
                    arr[j] = temp;
                    
                }
            }
        }
    }
    return arr;
}

console.log(insertSort([4,5,812,7,7,7,7,7,36,1309,46,35,8,42,3,1,2]));