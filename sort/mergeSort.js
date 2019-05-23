

// split then merge

function mergeSort(arr){
    let x = 2;
    //console.log(Math.log2(arr.length))
    for(let j = 0 ; j< Math.ceil(Math.log2(arr.length)); j++){
        let y = 0;
        for(let i=0; i<arr.length/2 ; i++){
            
            console.log(i*2+y,i*2+1+j+y)
            if( arr[i+y] > arr[i+j+1] ){
                let temp = arr[i];
                arr[i] = arr[i+j+1];
                arr[i+j+1] = temp;
            }
            y++;
        }
        x+=2;
    }
    
return arr;


}

console.log(mergeSort([4,5,812,7,7,7,7,7,36,1309,46,35,8,42,3,1,2]));