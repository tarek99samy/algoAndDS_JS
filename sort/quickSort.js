function exchange(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition(arr,start,end){
    /*
    to do : 
    1-all smaller than pivot at left
    2-all larger than pivot at right
    */
   let indexOfPivot = end-1;
   let small = start-1;
   let large = end-1;
   let pivot = arr[indexOfPivot];
   for(let j=small;j<end;j++){
       if( arr[j] <= pivot ){
        exchange(arr,j,small)
        small++;

       }
   }
   return small+2;
}
function quickSort(arr,start,end){
    if(start<end){
        let pivot = partition(arr,start,end);
        quickSort(arr,pivot+1,end);
        quickSort(arr,start,pivot-1);
    }
}

let arr = [10, 80, 30, 90, 40, 50, 70];
quickSort(arr,1,arr.length);
console.log(arr)

