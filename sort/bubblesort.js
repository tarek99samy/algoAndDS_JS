function bubbleSort(arr){
    let x = 0;
    for(let j=0;j<arr.length-1;j++){
        for(let i=0;i<arr.length-1-x;i++){
          //  console.log(arr[i] , arr[i+1])
            if( arr[i] > arr[i+1] ){
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
           
        }
         x++;
    }
  
return arr;

}

console.log(bubbleSort([4,5,812,7,7,7,7,7,36,1309,46,35,8,42,3,1,2]));