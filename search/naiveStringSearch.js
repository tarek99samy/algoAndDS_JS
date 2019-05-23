function naiveStringSearch(str,val){
    let len = val.length;
    let counter = 0;
for(let i=0;i<str.length;i++){
    let j = 0;
while( str[i+j] === val[j]  ){
    j++;
    if(j === len){
        counter++;
        break;
    }
}
}
return counter;
}

console.log(naiveStringSearch('ojsafgoiomglkarnfoiahnfomg','omg'))