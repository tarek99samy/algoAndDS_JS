

// split then merge
function merge(arr,l,m,r){
    let i, j, k; 
    let n1 = m - l + 1; 
    let n2 =  r - m; 

    /* create temp arrays */
    let L = new Array(n1);
    let R  = new Array(n2); 
  
    /* Copy data to temp arrays L[] and R[] */
    for (i = 0; i < n1; i++) 
    L[i] = arr[l + i]; 
for (j = 0; j < n2; j++) 
    R[j] = arr[m + 1+ j]; 
    
    /* Merge the temp arrays back into arr[l..r]*/
    i = 0; // Initial index of first subarray 
    j = 0; // Initial index of second subarray 
    k = l; // Initial index of merged subarray 
    while (i < n1 && j < n2) 
    { 
        if (L[i] <= R[j]) 
        { 
            arr[k] = L[i]; 
            i++; 
        } 
        else
        { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 
  
    /* Copy the remaining elements of L[], if there 
       are any */
    while (i < n1) 
    { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 
  
    /* Copy the remaining elements of R[], if there 
       are any */
    while (j < n2) 
    { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    }
}
function mergeSort(arr,left,right){
    
    if(left<right){

    let middle =  Math.floor((right+left)/2);
    mergeSort(arr,left,middle);
    mergeSort(arr,middle+1,right);
    
    merge(arr,left,middle,right);

    }

}

let arr = [4,5,812,7,7,7,7,7,36,1309,46,35,8,42,3,1,2]
mergeSort(arr , 0 , arr.length-1)
console.log(arr)