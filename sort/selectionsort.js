function selectionSort(arr) {
 

  for (let j = 0; j < arr.length; j++) {
    let min = arr[j];
      let index = j;
    for (let i = 0+j; i < arr.length; i++) {
      if (arr[i] < min){ 
          min = arr[i];
          index = i;
        }
    }
    let temp = arr[j];
    arr[j] = min;
    arr[index] = temp;
  }


  return arr;


}
console.log(selectionSort([4,5,812,7,7,7,7,7,36,1309,46,35,8,42,3,1,2]));