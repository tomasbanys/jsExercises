var array = [1,2,3,4,5,6,7];
var sum=0;
function sumArray(a){
  for(i=0;i<a.length;i++){
  sum += a[i];
}
return sum;
}
sumArray(array);